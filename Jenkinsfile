pipeline {
    agent any
    environment {
	DOCKERHUB_CREDENTIALS=credentials('JenkinsToDockerHub')
	imageName='xyz9999/node-app-docker-' 
	containerName='node-app-docker-CN'
	port='3000'
    }
    stages {
        stage('Build') {
		steps {
			echo "Building ..."
			sh '''
			docker system prune -af
			docker build -t $imageName${BUILD_NUMBER} .
			'''
		}
        }
        stage('Test DEV') {
		steps {
			echo "Testing ..."
		}
        }
	stage('Deploy DEV') {
		steps {
			echo "Deploying DEV ..."
			sh '''
			docker stop $containerName || true && docker rm -f $containerName || true
			docker run -p $port:$port -d --name $containerName $imageName${BUILD_NUMBER}
			'''
		}
        }
        stage('Login DockerHub') {
		steps {
			sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
		}
	}
	stage('Push DuckerHub') {
		steps {
			sh 'docker push $imageName${BUILD_NUMBER}:latest'
		}
	}
    }
}
