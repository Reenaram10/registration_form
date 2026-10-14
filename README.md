# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Build the Docker image
docker build -t student-task-manager .

Verify the image:
docker images

Run the container
docker run -d --name student-task -p 8080:80 student-task-manager

# List running containers
docker ps

# View application server logs
docker logs student-task

# Stop the container
docker stop student-task

# Start it again
docker start student-task

# Remove the stopped container
docker rm student-task

# Remove the image (after removing its containers)
docker rmi student-task-manager


You can pass a container environment variable using:
docker run -d  -p 8080:80 --name student-task student-task-manager
