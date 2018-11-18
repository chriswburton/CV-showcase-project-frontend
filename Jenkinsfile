pipeline {
  agent any
  stages {
    stage('Clean Up') {
      sh 'docker stop $(docker ps -a -q)''
      sh 'docker rm $(docker ps -a -q)'
      sh 'docker rmi $(docker images -a -q)'
    }

    stage('Image Dev') {
      sh 'docker build -t cv-showcase --no-cache .'
    }

    stage('Serve') {
      sh 'docker run -d --name test_env cv-showcase'
    }

    stage('Lint') {
      sh 'docker exec test_env ng lint'
    }

    stage('Test') {
      sh 'docker exec test_env ng test --code-coverage --watch=false'
      sh 'docker exec test_env xunit-viewer --results=unit-test-results.xml ---output=unit-test-results.html'
    }

    stage('e2e') {
      sh 'docker exec test_env ng e2e --port=1234'
    }

    stage('Image Prod') {
      sh 'docker cp test_env:dist/* ./prod/public'
      sh 'docker cp test_env:coverage ./prod/'
      sh 'docker cp test_env:unit-test-results.html ./prod'
      sh 'docker build -t frontend:prod'
    }

    stage('Store') {

    }
  }
  post {
    always {
      sh 'docker stop frontend:dev'
      sh 'docker rm frontend:dev'
    }
  }
}
