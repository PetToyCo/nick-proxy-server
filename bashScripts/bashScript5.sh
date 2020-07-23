
#Pulling just built image
#You first have to login into docker with >docker login --username=nyzdeploy


dockerUsername=nyzdeploy
dockerRepoName=fec-proxy-server-nick
#Dont forget to give new version number
version=1.0.0

docker pull $dockerUsername/$dockerRepoName:$version
