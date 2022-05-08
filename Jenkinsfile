pipeline {
    agent any
    environment {
	DOCKERHUB_CREDENTIALS=credentials('JenkinsToDockerHub')
    }

    stages {
        stage('Build') {
            steps {
                echo "Building ..."
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
                echo "Testing ..."
            }
        }
        stage('Login') {
		steps {
			sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
		}
	}
	stage('Push') {
		steps {
			sh 'docker push JenkinsToDockerHub/node-app-docker-${BUILD_NUMBER}:latest'
		}
	}
        stage('Deploy') {
            steps {
                echo "Deployment ..."
            }
        }
    }
}
