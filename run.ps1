docker stop fabric.ehr
docker rm fabric.ehr
docker build -t healthcatalyst/fabric.ehr .

$USERNAME = Read-Host "Service account user: (Default: $($env:USERNAME))"
if ([string]::IsNullOrWhiteSpace($USERNAME)) {
    $USERNAME = $($env:USERNAME)
}

$AD_DOMAIN = Read-Host "Active Directory domain: (Default: $($env:USERDNSDOMAIN))"
if ([string]::IsNullOrWhiteSpace($AD_DOMAIN)) {
    $AD_DOMAIN = $env:USERDNSDOMAIN
}

$AD_DOMAIN_SERVER = $($env:LOGONSERVER).Replace("\\", "")
$AD_DOMAIN_SERVER = Read-Host "Active Directory domain server: (Default: $AD_DOMAIN_SERVER)"
if ([string]::IsNullOrWhiteSpace($AD_DOMAIN_SERVER)) {
    $AD_DOMAIN_SERVER = $($env:LOGONSERVER).Replace("\\", "")
}

Do {$password = Read-Host -assecurestring -Prompt "Please enter your password for ${USERNAME}@${AD_DOMAIN}"} while ($($password.Length) -lt 1)
$password = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password))

$TEST_SQL_SERVER = "$env:computername.$env:userdnsdomain"
$TEST_SQL_SERVER = Read-Host "Test SQL Server: (Default: $TEST_SQL_SERVER)"
if ([string]::IsNullOrWhiteSpace($TEST_SQL_SERVER)) {
    $TEST_SQL_SERVER = "$env:computername.$env:userdnsdomain"
}

docker run -it -p 3000:3000 --name fabric.ehr -e SQLUser=$USERNAME -e SQLPassword=$password -e SQLServer=$TEST_SQL_SERVER -e ADDomain=$AD_DOMAIN -t healthcatalyst/fabric.ehr