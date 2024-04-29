import os
from wpd import WebPageDownloader

url = "https://ivandkotelnikov.wixsite.com/test/"
pages = ['pregnant', 'channel', 'lectures', 'consulting']
data_dir = os.getcwd() + '/sample'
wpd = WebPageDownloader(url, data_dir)
wpd.save_all_assets()

for p in pages:
    wpd = WebPageDownloader(url + p, data_dir + '/' + p)
    wpd.save_all_assets()