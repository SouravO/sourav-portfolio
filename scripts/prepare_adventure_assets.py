"""Create optimized WebP derivatives from generated adventure-comic masters.
No image synthesis, keying, or background replacement is performed here.
"""
from pathlib import Path
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]
for source in sorted((ROOT / 'assets/illustrations/builders-adventures').glob('*.png')):
    image = Image.open(source).convert('RGB')
    limit = 1600 if source.stem in ('cover', 'finale') else 1000
    image.thumbnail((limit, limit), Image.Resampling.LANCZOS)
    target = ROOT / 'public/illustrations' / f'{source.stem}.webp'
    image.save(target, quality=84, method=6)
    print(f'{target.name}: {image.size}, {target.stat().st_size // 1024} KB')
