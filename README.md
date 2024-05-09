
```markdown
# Book Management API

This is a simple Node.js API for managing book entries. It provides functionalities for user authentication, CRUD operations for managing books, and filtering books by author or publication year.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=8000                # Port on which the server will run
   Secret_key=<your-secret-key>  # Secret key for JWT token
   SERVERIP=<server_ip>
   MONGO_URL=<url>
   ```

4. Start the server:

   ```bash
   node index.js
   ```

## Endpoints

### User Authentication

- `POST /register`: Register a new user.
- `POST /login`: Login with existing user credentials.

### Book Management

- `GET /getAllBooks`: Get all books.
- `GET /getById/:id`: Get a book by ID.
- `POST /createBook`: Create a new book entry.
- `PUT /updateBook/:id`: Update a book by ID.
- `DELETE /deleteBook/:id`: Delete a book by ID.
- `GET /filter`: Filter books by author or publication year.

## Testing

You can use tools like Postman to test the API endpoints. Make sure to include the necessary headers and request body for each endpoint.

## Swagger Documentation
Swagger documentation is available for this API. You can access it using the following link:

http://localhost:8000/docs

## Dependencies

- Express.js: For building the web server.
- Mongoose: For MongoDB object modeling.
- bcryptjs: For password hashing.
- jsonwebtoken: For generating and verifying JWT tokens.
- dotenv: For loading environment variables.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

```

You can copy this content into your `README.md` file in your project repository. Make sure to replace `<repository-url>` with the actual URL of your Git repository.
