"""Deterministically key generated magenta stills. No identity/pose synthesis here.
Requires Pillow and NumPy. Keeps high-resolution alpha masters outside public/.
Keying uses the Oil Motion dominance-v2 helper; page background remains independent.
"""
from pathlib import Path
import numpy as np
from PIL import Image
from chroma_key import apply_key, default_parameters

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets/sourav-motion/source"
ALPHA = ROOT / "assets/sourav-motion/alpha"
OUTPUT = ROOT / "public/character"
ALPHA.mkdir(parents=True, exist_ok=True)
OUTPUT.mkdir(parents=True, exist_ok=True)

for filename, name in [("first-frame.png", "focus"), ("middle-frame.png", "connect"), ("last-frame.png", "welcome")]:
    path = SOURCE / filename
    if not path.exists():
        continue
    image = Image.open(path).convert("RGB")
    rgb, alpha, _ = apply_key(np.asarray(image), default_parameters((255, 0, 255)))
    rgba = Image.fromarray(np.clip(np.dstack([rgb, alpha]) * 255, 0, 255).astype("uint8"), "RGBA")
    rgba.save(ALPHA / f"{name}.png")
    rgba.thumbnail((900, 900), Image.Resampling.LANCZOS)
    rgba.save(OUTPUT / f"{name}.webp", quality=88, method=6)
    mobile = rgba.copy()
    mobile.thumbnail((450, 450), Image.Resampling.LANCZOS)
    mobile.save(OUTPUT / f"{name}-mobile.webp", quality=88, method=6)
    print(f"{name}: {rgba.width}x{rgba.height}, {(OUTPUT / f'{name}.webp').stat().st_size} bytes")
