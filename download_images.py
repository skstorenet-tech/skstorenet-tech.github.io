import urllib.request
import os

urls = {
    'logo.jpg': 'https://lookaside.fbsbx.com/lookaside/crawler/instagram/pucocnchi_1122/profile_pic.jpg',
    'cat1.jpg': 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3309625746526132632',
    'cat2.jpg': 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3821252266477966722',
}

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.google.com/'
}

os.makedirs('assets', exist_ok=True)

for name, url in urls.items():
    req = urllib.request.Request(url, headers=req_headers)
    try:
        with urllib.request.urlopen(req) as response:
            with open(f'assets/{name}', 'wb') as f:
                f.write(response.read())
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
