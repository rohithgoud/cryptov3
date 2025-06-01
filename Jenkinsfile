pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'rohithblogbox/cryptov3' // Replace with your registry
        DOCKER_REGISTRY = 'index.docker.io/v1/'
    }

    stages {
        stage('Checkout') {
            steps {
             git branch: 'main', credentialsId: 'gitcred', url: 'https://github.com/rohithgoud/cryptov3.git'
            }
        }
        

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'dockercred') {
                        docker.image("${DOCKER_IMAGE}:${BUILD_NUMBER}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment steps here
                // For example: kubectl apply, docker-compose up, etc.
                sh 'docker run -d -p 80:80 ${DOCKER_IMAGE}:${BUILD_NUMBER}'
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
} 