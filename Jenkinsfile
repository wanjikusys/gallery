def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
pipeline{
    agent any
    environment {
        LIVE_SITE = "https://gallery-feo3.onrender.com"
        RENDER_DEPLOY_HOOK = credentials('RENDER_DEPLOY_HOOK')
    }
    tools{
        nodejs 'node23'
    }
    stages{
        stage ("Fetching code from github") {
            steps{
                git branch:"master" , url:"https://github.com/wanjikusys/gallery.git"
            }
        }
        stage ("installing npm") {
            steps{
                sh 'npm install'
            }
        }
        stage ("unit test") { 
            steps{
                sh "npm test"
            }
        }
        stage ("deploy to render") {
            steps{
                script{
                    sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
                }
            }
        }
    }
    post {
        always {
            slackSend(channel: '#leena_ip1',
            color: COLOR_MAP[currentBuild.currentResult],
            message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n live site at: ${LIVE_SITE}")
        }
    }

}