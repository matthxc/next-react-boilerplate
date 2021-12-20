pipeline {
    agent { docker { image 'cypress/base:latest' } }

    stages {
        stage('build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
                sh 'npm run test:e2e:run'
            }
        }
        stage('export') {
            steps {
                sh 'npm run export'
            }
        }
    }
}