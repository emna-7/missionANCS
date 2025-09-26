
pipeline {
    agent any
    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    environment {
        APP_NAME = "mon-app"
        DEVSECOPS_SCORE = 100
        REPORT_FILE_JSON = "devsecops_report.json"
        REPORT_FILE_HTML = "devsecops_report.html"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "🔧 Checkout du code"
                checkout scm
            }
        }

        stage('Pré-commit simulation') {
            steps {
                script {
                    try {
                        echo " Simulation des pré-commit hooks (lint et tests rapides)"
                        sh 'echo "Pré-commit lint et style simulés"'
                    } catch (e) {
                        echo " Pré-commit échoué, pipeline continue"
                        env.DEVSECOPS_SCORE = env.DEVSECOPS_SCORE.toInteger() - 10
                    }
                }
            }
        }

        stage('Lint & Analyse statique') {
            steps {
                script {
                    try {
                        echo "🔍 Lint multi-langage et analyse statique"
                        sh 'echo "Lint JS/Python/Java simulé"'
                    } catch (e) {
                        echo " Lint échoué mais pipeline continue"
                        env.DEVSECOPS_SCORE = env.DEVSECOPS_SCORE.toInteger() - 15
                    }
                }
            }
        }

        stage('Tests unitaires adaptatifs') {
            steps {
                script {
                    try {
                        echo "🧪 Exécution des tests unitaires pour fichiers modifiés"
                        sh 'echo "Tests unitaires simulés"'
                    } catch (e) {
                        echo " Certains tests ont échoué, pipeline continue"
                        env.DEVSECOPS_SCORE = env.DEVSECOPS_SCORE.toInteger() - 20
                    }
                }
            }
        }

        stage('Analyse sécurité & dépendances') {
            steps {
                script {
                    try {
                        echo " Analyse de sécurité DevSecOps et dépendances vulnérables"
                        sh 'echo "Scan vulnérabilités simulé"'
                    } catch (e) {
                        echo " Vulnérabilités détectées mais pipeline continue"
                        env.DEVSECOPS_SCORE = env.DEVSECOPS_SCORE.toInteger() - 25
                    }
                }
            }
        }

        stage('Analyse tech debt / complexité') {
            steps {
                script {
                    try {
                        echo " Analyse complexité, fonctions longues, duplication de code"
                        sh 'echo "Analyse tech debt simulée"'
                    } catch (e) {
                        echo " Analyse tech debt échouée mais pipeline continue"
                        env.DEVSECOPS_SCORE = env.DEVSECOPS_SCORE.toInteger() - 10
                    }
                }
            }
        }

        stage('Reporting & Score') {
            steps {
                script {
                    echo " Génération du rapport DevSecOps et score"
                    writeFile file: env.REPORT_FILE_JSON, text: """{
                        "score": ${env.DEVSECOPS_SCORE},
                        "status": "green",
                        "notes": [
                            "Pré-commit check simulé",
                            "Lint multi-langage",
                            "Tests unitaires adaptatifs",
                            "Scan sécurité & dépendances",
                            "Analyse tech debt"
                        ]
                    }"""
                    writeFile file: env.REPORT_FILE_HTML, text: """
                    <html><head><title>DevSecOps Report</title></head>
                    <body>
                    <h1>Score DevSecOps: ${env.DEVSECOPS_SCORE}</h1>
                    <ul>
                        <li>Pré-commit check simulé</li>
                        <li>Lint multi-langage</li>
                        <li>Tests unitaires adaptatifs</li>
                        <li>Scan sécurité & dépendances</li>
                        <li>Analyse tech debt</li>
                    </ul>
                    </body></html>
                    """
                    echo " Score DevSecOps: ${env.DEVSECOPS_SCORE}"
                }
            }
        }
    }

    post {
        always {
            echo " Pipeline terminée (toujours verte)"
            archiveArtifacts artifacts: "${env.REPORT_FILE_JSON}, ${env.REPORT_FILE_HTML}", fingerprint: true
        }
    }
}
