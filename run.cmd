@echo off
docker stop fabric.ehr
docker rm fabric.ehr
docker build -t healthcatalyst/fabric.ehr .

docker run -it -p 3000:3000 --name fabric.ehr -e SQLUser=<sqluser> -e SQLPassword=<sqlpassword> -e SQLServer=<sqlserver> -t healthcatalyst/fabric.ehr