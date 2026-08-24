from pathlib import Path
from PIL import Image, ImageDraw

ASSET_DIR = Path('/home/ubuntu/webdev-static-assets')
SOURCE = ASSET_DIR / 'karossy-glossy-leaf-s-favicon.png'

def fit_contain(image: Image.Image, box: tuple[int, int]) -> Image.Image:
    copy = image.copy()
    copy.thumbnail(box, Image.Resampling.LANCZOS)
    return copy

mark = Image.open(SOURCE).convert('RGBA')

# Crop only fully transparent edge canvas while preserving the complete supplied symbol.
alpha = mark.getchannel('A')
bounds = alpha.getbbox()
if bounds:
    mark = mark.crop(bounds)

# Compact browser-tab variant: a transparent 32px canvas with the whole brand symbol.
favicon = Image.new('RGBA', (32, 32), (0, 0, 0, 0))
favicon_mark = fit_contain(mark, (30, 30))
favicon.alpha_composite(favicon_mark, ((32 - favicon_mark.width) // 2, (32 - favicon_mark.height) // 2))
favicon.save(ASSET_DIR / 'karossy-favicon-32.png', optimize=True)

# Apple touch icon: opaque warm-paper field retains visible icon contrast in iOS shortcuts.
touch = Image.new('RGBA', (180, 180), '#f8f5ec')
touch_mark = fit_contain(mark, (148, 148))
touch.alpha_composite(touch_mark, ((180 - touch_mark.width) // 2, (180 - touch_mark.height) // 2))
touch.convert('RGB').save(ASSET_DIR / 'karossy-apple-touch-icon.png', optimize=True)

# Social image: centered mark on the site's Canopy Green with a restrained saffron base line.
social = Image.new('RGB', (1200, 630), '#153d35')
draw = ImageDraw.Draw(social)
draw.rectangle((0, 590, 1200, 630), fill='#f3a72d')
draw.ellipse((790, -220, 1380, 370), outline='#325e54', width=2)
draw.ellipse((-190, 340, 350, 880), outline='#325e54', width=2)
social_mark = fit_contain(mark, (390, 390))
social.paste(social_mark, ((1200 - social_mark.width) // 2, 82), social_mark)
social.save(ASSET_DIR / 'karossy-social-share-green-gold.png', optimize=True)
