pipeline{
    agent any
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
    }
}