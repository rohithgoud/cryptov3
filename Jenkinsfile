pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'cryptoapp'
        DOCKER_TAG = 'v3'
        DOCKER_REGISTRY = 'rohithblogbox' // Replace with your registry
    }

    tools {
        nodejs 'nodejs-20'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/rohithgoud/cryptoapp-v2.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Push Docker Image') {
            when {
                branch 'main' // Only push when on main branch
            }
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-credentials-id') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main' // Only deploy when on main branch
            }
            steps {
                echo 'Deploying the application...'
                // Add your deployment steps here
                // For example: kubectl apply, docker-compose up, etc.
                sh 'docker run -d -p 80:80 cryptoapp'
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