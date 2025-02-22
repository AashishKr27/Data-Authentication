# Data Authentication

# Overview

  -> Data Authentication is a Node.js-based web application that provides user authentication using MongoDB,
     Express.js, and JWT (JSON Web Tokens). This project allows users to create accounts, log in, and maintain authentication sessions securely.

# Features

  -> User Registration

  -> Password Encryption (bcrypt)

  -> User Login & Authentication (JWT-based)

  -> Session Management with Cookies

  -> Secure Password Storage

  -> Responsive UI using Tailwind CSS

# Tech Stack

  -> Backend: Node.js, Express.js, Mongoose, JWT, bcrypt, cookie-parser

  -> Frontend: EJS (Embedded JavaScript), Tailwind CSS

  -> Database: MongoDB

# Installation

Prerequisites

Ensure you have the following installed on your system:

  -> Node.js

  -> MongoDB

Steps
1. Install dependencies :
   -> npm init -y
   -> npm i express bcrypt mongoose cookie-parser jsonwebtoken ejs
   
2. Run the application :
   -> npx nodemon app.js

3. Open your browser and navigate to :
   -> http://localhost:3000

Project Structure

data-authentication/

<img width="431" alt="image" src="https://github.com/user-attachments/assets/3a8bff0d-bfb5-49d8-8ea3-40988fc354a4" />

API Endpoints

User Registration

  -> Endpoint: POST /create

  -> Description: Registers a new user with encrypted password.

  -> Request Body :
    {
      "username": "testuser",
      "email": "test@example.com",
      "password": "securepassword",
      "age": 25
    }
  -> Response :
    {
      "_id": "601d5f1e9d1b2c001f0c1234",
      "username": "testuser",
      "email": "test@example.com",
      "age": 25
    }

User Login
  -> Endpoint: POST /login
  -> Description: Authenticates user and issues a JWT token.
  -> Request Body :
  {
    "email": "test@example.com",
    "password": "securepassword"
  }
  -> Response :
    "Logged in"
    
Logout
  -> Endpoint: GET /logout
  -> Description: Clears the authentication token.
