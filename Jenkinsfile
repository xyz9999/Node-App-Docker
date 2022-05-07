pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                imageName=node-app-docker-${BUILD_NUMBER}
                containerName=CN-node-app-docker
                docker system prune -af
                docker build -t $imageName .
                docker stop $containerName || true && docker rm -f $containerName || true
                docker run -p 3000:3000 -d --name $containerName $imageName
                '''
            }
        }
        stage('Test') {
            steps {
                sh echo "Dev Testing ..."
            }
        }
        stage('Deploy') {
            steps {
                sh echo "Deployment ..."
            }
        }
    }
}
