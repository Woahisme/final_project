
import json

from facebook_scraper import get_profile
#pass through name from webpage
json_data = get_profile("rebecca.spiewak.7", cookies="./fbcookies.json")

# json_object = json.loads(json_data)

json_formatted = json.dumps(json_data, indent = 2)

print(json_formatted)

with open("fb_info.json", "w") as outfile:
    json.dump(json_data, outfile, indent = 2)