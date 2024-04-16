import os
from wpd import WebPageDownloader

url = "https://ivandkotelnikov.wixsite.com/test"
data_dir = os.getcwd() + '/sample'
print(data_dir)
wpd = WebPageDownloader(url, data_dir)
wpd.save_all_assets()