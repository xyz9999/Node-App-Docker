pipeline {
    agent {
        dockerfile true
    }

    stages {
        stage('Run tests') {
            steps {
                sh 'pwd'
                sh '''
                imageName=node-app-docker-${BUILD_NUMBER}
                containerName=Container-$imageName
                docker system prune -af
                docker build -t $imageName .
                docker stop $containerName || true && docker rm -f $containerName || true
                docker run -p 3000:3000 -d --name $containerName $imageName
                '''
            }
        }
    }
}
