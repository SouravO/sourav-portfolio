"""Compile generated magenta stills to alpha WebP. Does not synthesize artwork.
Run from repository root: python3 scripts/prepare_intro_assets.py
Requires Pillow/NumPy; uses the existing dominance-v2 chroma key helper.
"""
from pathlib import Path
import json
import numpy as np
from PIL import Image, ImageDraw
from chroma_key import apply_key, default_parameters

ROOT = Path(__file__).resolve().parents[1]
ART = ROOT / 'assets/illustrations/intro'
PUBLIC = ROOT / 'public/illustrations/intro'
for folder in [ART / 'alpha', ART / 'qa', PUBLIC]:
    folder.mkdir(parents=True, exist_ok=True)

report = {}
matrix = Image.new('RGB', (1200, 1200), '#f0e2bf')
for index, name in enumerate(['idea', 'build', 'stride']):
    image = Image.open(ART / 'source' / f'{name}.png').convert('RGB')
    rgb, alpha, _ = apply_key(np.asarray(image), default_parameters((255, 0, 255)))
    rgba = Image.fromarray(np.clip(np.dstack([rgb, alpha]) * 255, 0, 255).astype('uint8'), 'RGBA')
    rgba.save(ART / 'alpha' / f'{name}.png')
    corners = [rgba.getpixel(pos)[3] for pos in [(0, 0), (rgba.width-1, 0), (0, rgba.height-1), (rgba.width-1, rgba.height-1)]]
    assert corners == [0, 0, 0, 0], f'{name}: opaque key background'
    report[name] = {'source_size': image.size, 'alpha_corners': corners, 'variants': {}}
    for suffix, size in [('', (1000, 1500)), ('-mobile', (600, 900))]:
        variant = rgba.copy()
        variant.thumbnail(size, Image.Resampling.LANCZOS)
        path = PUBLIC / f'{name}{suffix}.webp'
        variant.save(path, quality=84, method=6)
        report[name]['variants'][suffix or 'desktop'] = {'size': variant.size, 'bytes': path.stat().st_size}
    # Inspect actual encoded desktop artwork over light/dark/blue/red surfaces.
    encoded = Image.open(PUBLIC / f'{name}.webp').convert('RGBA')
    preview = encoded.copy()
    preview.thumbnail((285, 285), Image.Resampling.LANCZOS)
    for row, color in enumerate(['#f0e2bf', '#171e21', '#204a54', '#b84431']):
        tile = Image.new('RGBA', (400, 300), color)
        tile.alpha_composite(preview, ((400-preview.width)//2, (300-preview.height)//2))
        ImageDraw.Draw(tile).text((12, 12), name, fill='white' if row else 'black')
        matrix.paste(tile.convert('RGB'), (index * 400, row * 300))
    print(name, report[name]['variants'])
matrix.save(ART / 'qa' / 'background-matrix.jpg', quality=90)
(ART / 'qa' / 'asset-report.json').write_text(json.dumps(report, indent=2) + '\n')
