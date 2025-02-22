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

# Steps
1. Install dependencies : <br>
     -> npm init -y <br>
     -> npm i express bcrypt mongoose cookie-parser jsonwebtoken ejs <br>
   
3. Run the application : <br>
   -> npx nodemon app.js <br>

5. Open your browser and navigate to : <br>
   -> http://localhost:3000

# Project Structure

# data-authentication/

<img width="431" alt="image" src="https://github.com/user-attachments/assets/3a8bff0d-bfb5-49d8-8ea3-40988fc354a4" />

# API Endpoints

User Registration <br>
  -> Endpoint: POST /create <br>
  -> Description: Registers a new user with encrypted password. <br>
  -> Request Body : <br>

  <img width="241" alt="image" src="https://github.com/user-attachments/assets/e1d43b29-d590-46bd-a0bc-d93ddba2c8b9" /> <br>

  -> Response : <br>

  <img width="254" alt="image" src="https://github.com/user-attachments/assets/67cc6a1e-5ab7-43b4-8018-3c3731057c5c" />

# User Login
  -> Endpoint: POST /login
  -> Description: Authenticates user and issues a JWT token.
  -> Request Body :

  <img width="224" alt="image" src="https://github.com/user-attachments/assets/f254b374-d6b6-4ff1-a821-63ff5f8492a7" />

  -> Response :
    "Logged in"
    
# Logout
  -> Endpoint: GET /logout
  -> Description: Clears the authentication token.
