# 🗒️ Note App

Simple note app to create notes.

Built with Next.js, React, and TypeScript.

## I🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/MahmoudDahdouh/ctx-technical-test.git
```

### **Client**

1. create a `.env` file in the client directory
   `/client/.env`

2. add environment variables in `.env` file

```bash
# NEXT_PUBLIC_BASE_URL is required
# base url of the server
NEXT_PUBLIC_BASE_URL=http://localhost:3001/
```

3. install packages

```bash
# make sure you are in the root directory
cd client
npm install
```

4. start the client

```bash
# make sure you are in the root directory
cd client
npm run dev
```

### **Server**

1. create a `.env` file in the server directory
   `/server/.env`

2. add environment variables in `.env` file

```bash
NODE_ENV=development
PORT=3001
API_PREFIX=/api/v1
```

you can copy the example `.env.sample` file and edit it to suit your needs

> ⚠️ make sure that server and client are working on different ports

3. install packages

```bash
# make sure you are in the root directory
cd server
npm install
```

4. start the server

```bash
# make sure you are in the root directory
cd server
npm run dev
```
