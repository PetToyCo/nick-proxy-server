
#if a previous version of your image is already running, run the following. If brand new image, go to "Pulling just built image"

#in AWS instance, run >docker ps to list your containers. Grab correct ID and enter below
runningContainerID=c56a7af58f2c
#in AWS instance, run >docker images to list your containers. Grab correct ID and enter below
runningImageID=251ec0b10140

docker stop $runningContainerID

docker rm $runningContainerID

# enter y when prompted
docker system prune

docker rmi $runningImageID
