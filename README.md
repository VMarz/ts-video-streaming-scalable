# Scalable Video Streaming with Node.js, Express, and Socket.IO

This project is a scalable video streaming server built with TypeScript, Node.js, Express, and Socket.IO.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Scalable video streaming using Express and Socket.IO
- TypeScript for type safety and maintainability
- PM2 for process management and scalability
- Swagger for API documentation
- Organized folder structure for scalability

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (or npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/scalable-video-streaming.git
   cd scalable-video-streaming


2. Install dependencies:
    ```bash
    yarn install

3. Install PM2 globally if you haven't already:
    ```bash
    yarn globad add pm2

## USAGE
1.  Compile the TypeScript code:
    ```bash
    npx tsc

2.  Start the server using PM2:
    ```bash
    pm2 start dist/server.js -i max

3.  Visit http://localhost:3000 to see the home page and http://localhost:3000/api-docs for the API documentation.

4.  To stop the server:
    ```bash
    pm2 stop server

## Folder Structure
    ```my-ts-app/
        │
        ├── src/
        │   ├── config/
        │   │   └── index.ts
        │   ├── controllers/
        │   │   └── exampleController.ts
        │   ├── middleware/
        │   │   └── exampleMiddleware.ts
        │   ├── models/
        │   │   └── exampleModel.ts
        │   ├── routes/
        │   │   └── index.ts
        │   ├── socket/
        │   │   └── socket.ts
        │   ├── utils/
        │   │   └── exampleUtil.ts
        │   ├── app.ts
        │   └── server.ts
        ├── public/
        │   └── (static files)
        ├── package.json
        ├── tsconfig.json
        └── yarn.lock / package-lock.json


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.
License

This project is licensed under the MIT License. See the LICENSE file for details.
