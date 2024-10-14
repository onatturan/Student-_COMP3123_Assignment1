Employee Management and User Authentication API
COMP 3123 - Assignment 1
This project is a RESTful API built using Node.js, Express, and MongoDB. It implements CRUD operations for user and employee management. The API also includes user authentication and validation, with error handling for requests.

Features
User Management:

POST /api/v1/user/signup: Create a new user account.
POST /api/v1/user/login: User login to the system.
Employee Management:

GET /api/v1/emp/employees: Retrieve a list of all employees.
POST /api/v1/emp/employees: Create a new employee.
GET /api/v1/emp/employees/{eid}: Retrieve employee details by employee ID.
PUT /api/v1/emp/employees/{eid}: Update employee details.
DELETE /api/v1/emp/employees?eid={eid}: Delete an employee by employee ID.
Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Framework for building web applications.
MongoDB: NoSQL database for data storage.
Mongoose: MongoDB object modeling tool.
Postman: For testing API endpoints.
Installation and Setup
Clone the repository:

bash
Copy code
git clone https://github.com/onatturan/Student-_COMP3123_Assignment1.git
cd Student-_COMP3123_Assignment1
Install the dependencies:

bash
Copy code
npm install
Set up MongoDB:

Ensure MongoDB is installed and running locally or use a cloud-based service like MongoDB Atlas.
Create a database named comp3123_assignment1.
Run the application:

bash
Copy code
npm start
API Endpoints
User Management
Sign Up: POST /api/v1/user/signup

Request Body:

json
Copy code
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "message": "User created successfully.",
  "user_id": "generated_user_id"
}
Login: POST /api/v1/user/login

Request Body:

json
Copy code
{
  "email": "johndoe@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "message": "Login successful.",
  "jwt_token": "generated_token"
}
Employee Management
Get All Employees: GET /api/v1/emp/employees

Response:
json
Copy code
[
  {
    "employee_id": "1",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "position": "Engineer",
    "department": "Engineering"
  }
]
Create Employee: POST /api/v1/emp/employees

Request Body:

json
Copy code
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "position": "Product Manager",
  "department": "Product"
}
Response:

json
Copy code
{
  "message": "Employee created successfully.",
  "employee_id": "generated_employee_id"
}
Testing with Postman
Use the provided Postman collection to test the API.
Ensure MongoDB is running and the API server is started before sending requests.
Validation
The API uses express-validator for input validation.
Error messages are sent back to the client for invalid data inputs.
License
This project is for educational purposes, created as part of the Full Stack Development course (COMP 3123).