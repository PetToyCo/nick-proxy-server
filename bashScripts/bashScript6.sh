

#BEFORE YOU RUN THE IMAGE YOU PULLED: you have to "">docker images" and grab the id of the image you just pulled
imageID=1e95ba096d39
portMapping=3000:3000

docker run -dp $portMapping $imageID

