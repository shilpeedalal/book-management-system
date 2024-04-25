# Book Management API

This is a simple Node.js API for managing book entries. It provides functionalities for user authentication, CRUD operations for managing books, and filtering books by author or publication year.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
npm install
PORT=3000                # Port on which the server will run
Secret_key=<your-secret-key>  # Secret key for JWT token
node index.js

Endpoints
User Authentication
POST /register: Register a new user.
POST /login: Login with existing user credentials.
Book Management
GET /getAllBooks: Get all books.
GET /getById/:id: Get a book by ID.
POST /createBook: Create a new book entry.
PUT /updateBook/:id: Update a book by ID.
DELETE /deleteBook/:id: Delete a book by ID.
GET /filter: Filter books by author or publication year.

Testing
You can use tools like Postman to test the API endpoints. Make sure to include the necessary headers and request body for each endpoint.
