pipeline {
    agent {
        docker { image 'node-app-docker' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
