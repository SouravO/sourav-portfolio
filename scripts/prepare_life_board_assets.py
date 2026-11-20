"""Create responsive WebP derivatives of the approved, unmodified illustration masters."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'assets/illustrations/life-board/source'
OUTPUT = ROOT / 'public/illustrations/life-board'
OUTPUT.mkdir(parents=True, exist_ok=True)

for master in sorted(SOURCE.glob('*.png')):
    with Image.open(master) as image:
        for size, suffix in ((800, ''), (400, '-small')):
            derivative = image.convert('RGB')
            derivative.thumbnail((size, size), Image.Resampling.LANCZOS)
            derivative.save(OUTPUT / f'{master.stem}{suffix}.webp', quality=85, method=6)
