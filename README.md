# GetSubs

## Description

API built with Node.js, Express, and MongoDB. It provides a user-friendly API docs

Live URL: [https://getsubs-mongodb.onrender.com/](https://getsubs-mongodb.onrender.com/)

## Features

- **Subscriber Listing**: Retrieve an array of all subscribers, including their details such as id, name, channel, time .

- **Filtered Subscriber Names**: Get an array of subscribers with only their names and channels, allowing for quick reference.

- **Individual Subscriber**: Fetch an individual subscriber object by providing their unique ID.
- **API Schema Documentation**: Access the API schema documentation as a static file to understand the available endpoints, request/response formats, and any 
  additional details. You can find the documentation file in the repository.

- **Error Handling**: Proper error handling with appropriate status codes (500, 400, and 404) and informative error messages.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/manoj-jayaraman2001/getsubs-mongodb.git
```

2. Install Dependencies:
   
```shell
npm install
```
3. Set up environment variables:

4. Provide necessary values for MongoDB connection and other configuration options in .env
   
5. Start the server:

```shell
npm start
```

6. Access the application at http://localhost:3000

