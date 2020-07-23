#!/bin/bash

#to get pemFileDirectory - open terminal, drag folder containing .pem file into terminal. Then copy and paste resulting filepath, below
pemFileDirectory=/Users/nzabalza/Immersive/Sprints/FEC/PEMS
pemFileName=proxy-server-nick
AWSInstanceIP=54.183.137.155

cd $pemFileDirectory

ssh -i $pemFileName.pem ec2-user@$AWSInstanceIP

