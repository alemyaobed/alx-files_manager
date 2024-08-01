
# 0x04. Files Manager

## Project Overview

This project is a summary of the back-end trimester, covering authentication, NodeJS, MongoDB, Redis, pagination, and background processing. The objective is to build a simple platform for uploading and viewing files.

## Team Members

- Jane Waguthi
- Obed Alemya ALENYORIGE

## Project Timeline

- **Start Date:** Aug 1, 2024, 6:00 AM
- **End Date:** Aug 8, 2024, 6:00 AM
- **Checker Release:** Aug 3, 2024, 12:00 AM

## Features

- **User Authentication via a Token**
- **List All Files**
- **Upload a New File**
- **Change File Permissions**
- **View a File**
- **Generate Thumbnails for Images**

## Technologies Used

- **JavaScript**
- **ES6**
- **NoSQL**
- **MongoDB**
- **Redis**
- **NodeJS**
- **ExpressJS**
- **Kue**

## Learning Objectives

By the end of this project, you should be able to:

- Create an API with Express
- Authenticate a user
- Store data in MongoDB
- Store temporary data in Redis
- Set up and use a background worker

## Requirements

- **Editors:** vi, vim, emacs, Visual Studio Code
- **Node Version:** 12.x.x
- **OS:** Ubuntu 18.04 LTS
- **Linting:** ESLint

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/lemyjay/alx-files_manager.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd alx-files_manager
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### User Authentication

- **POST /auth**
  - Authenticate a user and return a token.

### File Management

- **GET /files**
  - List all files.

- **POST /files**
  - Upload a new file.

- **PATCH /files/:id/permissions**
  - Change file permissions.

- **GET /files/:id**
  - View a file.

### Background Processing

- **GET /process**
  - Process the queue for file operations like generating thumbnails.

## Resources

- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API doc](https://nodejs.org/dist/latest-v14.x/docs/api/process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)
- [MongoDB](https://www.mongodb.com/)
- [Bull](https://github.com/OptimalBits/bull)
- [Image thumbnail](https://www.npmjs.com/package/thumbnail)
- [Mime-Types](https://www.npmjs.com/package/mime-types)
- [Redis](https://redis.io/)

## Usage

1. **Check Available Seats**
   ```bash
   curl localhost:1245/available_seats
   ```

2. **Reserve a Seat**
   ```bash
   curl localhost:1245/reserve_seat
   ```

3. **Process the Queue**
   ```bash
   curl localhost:1245/process
   ```

## Contact

For any inquiries, please reach out to the team members via GitHub.

