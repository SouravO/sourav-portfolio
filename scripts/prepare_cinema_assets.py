"""Resize/compress approved full-scene source illustrations; no synthesized artwork.
Run: python3 scripts/prepare_cinema_assets.py (Pillow required).
"""
from pathlib import Path
import json
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ART = ROOT / 'assets/illustrations/cinema'
PUBLIC = ROOT / 'public/illustrations/cinema'
PUBLIC.mkdir(parents=True, exist_ok=True)
report = {}
for name in ['midnight', 'portrait', 'street', 'rooftop']:
    master = Image.open(ART / 'source' / f'{name}.png').convert('RGB')
    report[name] = {}
    for suffix, width, quality in [('', 1536, 85), ('-mobile', 1152, 83)]:
        image = master.copy()
        image.thumbnail((width, width), Image.Resampling.LANCZOS)
        path = PUBLIC / f'{name}{suffix}.webp'
        image.save(path, quality=quality, method=6)
        report[name][suffix or 'desktop'] = {'size': image.size, 'bytes': path.stat().st_size}
    print(name, report[name])
(ART / 'asset-report.json').write_text(json.dumps(report, indent=2) + '\n')
