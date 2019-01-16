######################
# Define variables   #
######################
repositoryName=ccr.ccs.tencentyun.com/projectname
imageName=$repositoryName/projectname
currentDate=$(date "+%Y.%m.%d.%H.%M.%S")
######################
# Build docker image #
######################
npm install
if [ "$?"="0" ]
then
    npm run build
    if [ "$?"="0" ]
    then
        docker build -t $imageName:$currentDate -t $imageName:latest .
    else
        echo npm run build failed!
    fi
else
    echo npm install failed!
fi
