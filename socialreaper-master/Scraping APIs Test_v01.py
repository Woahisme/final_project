
from socialreaper import Facebook
user = "Rebecca Spiewak"
fbk = Facebook("api_key")

description = fbk.description("user", birthday="true", 
    geoloc="true")

for int in description:
    print(description['birthday', ' ', 'geoloc'])