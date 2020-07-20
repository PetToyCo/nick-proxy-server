# Proxy-Server-Nick
Handles all reviews and review-related visuals for PetToyCo

## Related Projects

  - https://github.com/PetToyCo/photo-gallery
  - https://github.com/PetToyCo/description_directions_attributes_
  - https://github.com/PetToyCo/mainTitle_price
  - https://github.com/PetToyCo/reviews
  - https://github.com/PetToyCo/ProductRecommendations
  - https://github.com/PetToyCo/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To use this proxy server:

1. Download each of the above repos (in the section "Related Projects". Each repo represents a service to this proxy) into its own unique directory. Then follow the instructions in each ReadMe - for each service - for how to seed a MongoDB instance running on your computer, with data. Also, follow the instructions for starting each of the service's servers.
2. Then start the proxy's server by making the proxy's root directory the cd in terminal and running >npm run server
3. Visit any page that follows the form:
http://127.0.0.1:3000/product?itemID='value 100 to 199 without the quotes'

4. To run the tests, visit the following link (after following the special note below):
http://127.0.0.1:3000/SpecRunner.html
NOTE: as the page that loads tells you, you have to wait before the tests will run. This is to give the embedded iframe the chance to load the proxy's html file, followed by that html file sending out get requests for the service components, followed by those components sending out requests for data.
5. See section below on deployment, if you want to deploy the proxy server.

SPECIAL NOTE: For one of the tests to pass, you currently have to make a modification to it before running the spec runner. To do this, follow these steps
1. In your mongo terminal instance:
a. >use images
b. >db.images.find({itemId: '100'})
c. For the data you receive back: the itemImages field is an array with two objects in it. Each object has 'small', 'medium', and 'large' keys. For the first object's 'small' key, copy the url stored there.
2. In client/tests.js, replace the url on line 30 with the one you just copied.
3. You can now run the SpecRunner.
4. Alternatively, you can just comment out that test (lines 26-31) and visually inspect that changing item ids in the proxy's url always leads to the same images appearing when viewing the same itemID
5. We are currently working to change the images database so that this special note can be removed and so the tests will pass without any modification.

## Deployment

1. In client/index.html, at the bottom is all the script tags used to fetch bundles from the six services this proxy server relies on. In development mode, these all read 127.0.0.1. Once all the deployment servers have been launched, you can change these to their actual IP addresses. Don't worry. Just above the script tags are commented-out duplicates with the 127.0.0.1 address, allowing quick and easy switching back to development mode. NOTE: there is a also a CSS link tag on line 13 that needs its IP address changed, too.
2. Once all changes to IP addresses have been made and saved, build the image with >docker build -t "name of image, without quotes". If you want to assign a tag, don't forget :tagName after the image name. If you don't supply the tag name, :latest will be automatically appended. I currently use proxy-server-nick as my image name.
3. If not already done so, create account at hub.docker.com and login. Then create a public repo. The name of the repo I currently use is fec-proxy-server-nick.
4. In terminal, you can directly login into your Docker Hub account with >docker login --username="your username, without quotes". When prompted, enter your password.
5. The image you just built should report the image ID at the end of the build. Or you can find it by >docker images. In the printout caused by this command, the image should be the first one listed if you haven't built any other images since building the one for this proxy. With either method, copy the image's ID number for use in step 6
6. Before you push, you have to tag the image with >docker tag "image ID, without quotes" "Docker Hub username, without quotes"/"repo name from step 3, without quotes":"tag name, without quotes". Earlier, it was OK to let :latest be automatically appended but for this tag name, you will probably want to assign a version number or some other uniquely identifying feature.
7.  To push: >docker push "Docker Hub username, without quotes"/"repo name you tagged the image with in step 6, without quotes".
8. With the image on Docker Hub, you now need to get it onto your AWS instance that should have been fired up before (or during) step 1.
9. In terminal, >cd "file directory where .pem file is saved for the AWS instance".
10. If not done already, make sure only the root user on your computer can access the .pem file with >chmod 400 "name of .pem file, without quotes".pem
11. Then SSH into your AWS instance with >ssh -i "name of .pem file, without quotes".pem ec2-user@"the IP address of the AWS instance"
12. If not already done so, install docker onto the instance with >sudo yum update -y && sudo yum install -y docker && sudo service docker start. You can then add the ec2-user to the docker group so all docker commands can be run without sudo by >sudo usermod -a -G docker ec2-user. You then have to exit for this change to take effect using >exit. Re-sign-in to your AWS instance by repeating step 11.
13. You can now run Docker commands the same way you run them on your local terminal. Login to Docker (step 4).
14. Pull the image with >docker pull "Docker Hub username, without quotes"/"repo name from step 3, without quotes":"tag name, without quotes"
15. Find image ID with >docker images. Copy it for use in step 16.
16. Fire up the proxy image with >docker -dp 3000:3000 "image ID, without quotes"
17. At this point, the proxy should be live and you can visit it by going to http://"AWS instance IP address for the instance the proxy is on":3000/product?itemID="value 100 to 199, without quotes". However, if the services are not already updated and live, you probably won't see much. If nothing displays, you can confirm the proxy is live by right clicking the blank page and selecting "Inspect". You should at least see the DOM skeleton found in the body of the index.html file.

## Requirements

- Node 12.16.1


## Development

### Installing Dependencies

From within the root directory: npm install


