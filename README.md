# PoolKaro

PoolKaro is a web application that allows users to share rides, carpool, and make commuting more efficient.


## Features

- **Share Rides:** Users can create and share ride details including source, destination, date, time, and more.

- **Carpooling:** Facilitates carpooling by connecting users with similar commuting routes.

- **User Authentication:** Secure user authentication and authorization.

- **Profile Management:** Users can manage their profiles, view ride history, and more.

- **Search and Filters:** Enables users to search for available rides and apply filters.

## Getting Started

- Navigate to the project directory: cd client & cd server

- Install dependencies: npm install

- Set up environment variables:
  Create a .env file in the root directory and add the necessary environment variables.
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

   Replace your_mongodb_connection_string and your_jwt_secret_key with your MongoDB connection string and a secret key for JWT.

 - Start the application: npm start
 
### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yashhibare7/PoolKaro.git

### Usage
User Registration:

Register as a new user by providing the required information.
Login:

Log in using your registered email and password.
Share a Ride:

Create a new ride by providing details such as source, destination, date, and time.
Search for Rides:

Use the search functionality to find rides based on your commuting needs.
Carpooling:

Connect with other users offering rides on similar routes.

### Technologies
- Frontend:
   React.js
   HTML5, CSS3, JavaScript
- Backend:
   Node.js
   Express.js
   MongoDB
- Authentication:
   JSON Web Tokens (JWT)
