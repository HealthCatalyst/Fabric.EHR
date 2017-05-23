@echo off
docker stop fabric.ehr
docker rm fabric.ehr
docker build -t fabric.ehr .

for /f "tokens=1-2 delims=:" %%a in ('ipconfig^|find "IPv4"') do set ip=%%b
set ip=%ip:~1%
echo %ip%

docker run -d -p 3000:3000 --add-host dockerhost:%ip% -e SQLServer=dockerhost --name fabric.ehr fabric.ehr
