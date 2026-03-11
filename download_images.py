import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# Directories
BASE_DIR = '/Users/david/.openclaw/workspace/projects/kitechkites-cz/web/public/images'
DIRS = {
    'frs-v2': os.path.join(BASE_DIR, 'frs-v2'),
    'magus-v1': os.path.join(BASE_DIR, 'magus-v1'),
    'general': os.path.join(BASE_DIR, 'general')
}

for d in DIRS.values():
    os.makedirs(d, exist_ok=True)

def download_images(url, folder):
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        soup = BeautifulSoup(response.content, 'html.parser')
        images = soup.find_all('img')
        
        for img in images:
            src = img.get('src')
            if not src:
                src = img.get('data-src') # For lazy loaded images
            
            if src:
                if src.startswith('data:image'):
                    continue
                
                img_url = urljoin(url, src)
                parsed_url = urlparse(img_url)
                filename = os.path.basename(parsed_url.path)
                
                if not filename or '.' not in filename:
                    continue
                    
                filepath = os.path.join(folder, filename)
                
                if not os.path.exists(filepath):
                    print(f"Downloading {img_url} to {filepath}")
                    try:
                        img_data = requests.get(img_url, headers={'User-Agent': 'Mozilla/5.0'}).content
                        with open(filepath, 'wb') as handler:
                            handler.write(img_data)
                    except Exception as e:
                        print(f"Failed to download {img_url}: {e}")
    except Exception as e:
        print(f"Failed to scrape {url}: {e}")

download_images('https://wp.kitechkites.com/kitech-frs-v2/', DIRS['frs-v2'])
download_images('https://wp.kitechkites.com/kitech-magus-v1/', DIRS['magus-v1'])
download_images('https://wp.kitechkites.com/', DIRS['general'])
download_images('https://kitechkites-cz6.webnode.cz/', DIRS['general'])

print("Image download complete.")
