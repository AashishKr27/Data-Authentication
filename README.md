# Data Authentication

# Overview

  -> Data Authentication is a Node.js-based web application that provides user authentication using MongoDB, Express.js, <br>
     and JWT (JSON Web Tokens). This project allows users to create accounts, log in, and maintain authentication sessions securely.

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

# Steps
1. Install dependencies : <br>
     -> npm init -y <br>
     -> npm i express bcrypt mongoose cookie-parser jsonwebtoken ejs <br>
   
3. Run the application : <br>
   -> npx nodemon app.js <br>

5. Open your browser and navigate to : <br>
   -> http://localhost:3000

# Project Structure

<img width="339" alt="image" src="https://github.com/user-attachments/assets/9ca7f784-84e1-467c-a112-2a6106efbb43" />

# API Endpoints

User Registration <br>
  -> Endpoint: POST /create <br>
  -> Description: Registers a new user with encrypted password. <br>
  -> Request Body : <br>

  <img width="241" alt="image" src="https://github.com/user-attachments/assets/e1d43b29-d590-46bd-a0bc-d93ddba2c8b9" /> <br>

  -> Response : <br>

  <img width="260" alt="image" src="https://github.com/user-attachments/assets/20d8adb1-56fa-4d67-ae72-a7a498e5df4b" />

# User Login
  -> Endpoint: POST /login <br>
  -> Description: Authenticates user and issues a JWT token. <br>
  -> Request Body : <br>

  <img width="224" alt="image" src="https://github.com/user-attachments/assets/f254b374-d6b6-4ff1-a821-63ff5f8492a7" /> <br>

  -> Response : <br>
    "Logged in" <br>
    
# Logout
  -> Endpoint: GET /logout <br>
  -> Description: Clears the authentication token. <br>

# Security Measures

  -> Password Hashing: All passwords are hashed using bcrypt. <br>

  -> JWT Authentication: JSON Web Tokens ensure secure authentication. <br>

  -> Cookie-Based Sessions: Auth tokens are stored securely in HTTP-only cookies. <br>

# Output
<img width="721" alt="image" src="https://github.com/user-attachments/assets/56fb1a03-f595-4912-a3eb-42339d217606" />
