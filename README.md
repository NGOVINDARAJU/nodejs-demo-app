# Node.js Demo App - CI/CD with GitHub Actions
This is a simple **Node.js Express app** used to demonstrate a **CI/CD pipeline** with:
- GitHub Actions
- Docker
- DockerHub
  
# Run Locally
- npm install
- npm start

# Run with Docker
- docker build -t nodejs-demo-app .
- docker run -p 3000:3000 nodejs-demo-app

# CI/CD Pipeline
Trigger: Push to main
Steps:
- Install & Test
- Build Docker Image
- Push to DockerHub

# secrets Required in GitHub:
- DOCKER_USERNAME
- DOCKER_PASSWORD

# How to trigger CI/CD
- git init
- git add .
- git commit -m "Initial commit: Node.js demo app with CI/CD"
- git branch -M main
- git remote add origin https://github.com/<your-github-username>/nodejs-demo-app.git
- git push -u origin main
- After push, GitHub Actions will run automatically. Watch the run at Actions → workflow run
