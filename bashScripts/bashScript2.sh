#!/bin/bash

#grab id from image build by first bash script
imageID=1e95ba096d39
dockerUsername=nyzdeploy
dockerRepoName=fec-proxy-server-nick
#Dont forget to give new version number
version=1.0.0

#enter password when prompted
docker login --username=$dockerUsername

docker tag $imageID $dockerUsername/$dockerRepoName:$version

docker push $dockerUsername/$dockerRepoName:$version
