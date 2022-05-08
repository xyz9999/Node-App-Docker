pipeline {
    agent any
    environment {
	DOCKERHUB_CREDENTIALS=credentials('JenkinsToDockerHub')
	imageName='xyz9999/node-app-docker-' + '${BUILD_NUMBER}'
    }

    stages {
        stage('Build') {
            steps {
                echo "Building ..."
                sh '''
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
			sh 'docker push $imageName:latest'
		}
	}
        stage('Deploy') {
            steps {
                echo "Deployment ..."
            }
        }
    }
}
