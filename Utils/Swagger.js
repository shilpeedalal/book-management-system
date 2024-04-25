// documentation for swagger ui on http://localhost:8000/docs

/**
* @swagger
* /:
*  get:
*       tags:
*           - Root Route
*       description: Used to check server connection.
*       responses:
*         '200':
*             description: Welcome to Book Management App.
*/ 


/**
 * @swagger
 * /register:
 *  post:
 *      tags: 
 *        - Authentication routes.
 *      description: Used to register a new user to the database.
 *      parameters:
 *          - in: body
 *            name: Register
 *            description: used to register the user
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *         '201':
 *            description: User Registered succesfully.
 *         '400':
 *            description: User already exists.
 *         '500':
 *            description: Internal Server Error.
 */


/**
 * @swagger
 * /login:
 *  post:
 *    tags:
 *      - Authentication routes.
 *    description: Used to login the user.
 *    parameters:
 *      - in: body
 *        name: Login
 *        description: used to login the user - with the following details        
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: Login Successfully
 *      '400':
 *        description: Please provide all the details
 *      '401':
 *        description: User not found
 *      '500':
 *        description: Internal Server Error
 */

/**
 * @swagger
 * /getAllBooks:
 *   get:
 *     tags:
 *       - Book routes
 *     description: Used to get all the available Books
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token for user authentication & authorization
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Here are all the books
 *       '404':
 *         description: Book not found !
 *       '500':
 *        description: Internal Server Error   
 */


/**
 * @swagger
 * /getById/{id}:
 *   get:
 *     tags:
 *       - Book routes
 *     description: Used to get user's profile.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User's id.
 *         required: true
 *       - in: header
 *         name: Authorization
 *         description: Token for user authentication & authorization
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: User not found 
 *       '500':
 *        description: Internal Server Error   
 */


/**
 * @swagger
 * /createBook:
 *   post:
 *     tags:
 *       - Book routes
 *     description: Used to create a book
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token for user authentication & authorization
 *         schema:
 *           type: string
 *         required: true
 *       - in: body
 *         name: title
 *         description: The book details to post.
 *         schema:
 *           type: object
 *           properties:
 *            title:
 *              type: string
 *            author:
 *              type: string
 *            publicationYear:
 *              type: string
 *     responses:
 *       '200':
 *         description: Book Created Successfully
 *       '400':
 *         description: Please provide all the details
 *       '500':
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /updateBook/{id}:
 *   put:
 *     tags:
 *       - Book routes
 *     description: Used to update the book details
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token for user authentication & authorization
 *         schema:
 *           type: string
 *         required: true
 *       - in: path
 *         name: id
 *         description: The Book id to be updated.
 *         schema:
 *           type: object
 *           properties: 
 *             id:
 *               type: string
 *             title:
 *               type: string
 *             author:
 *               type: string
 *             publicationYear:
 *               type: string
 *     responses:
 *       '201':
 *         description: Book details updated successfully
 *       '400':
 *         description: data not found !
 *       '500':
 *        description: Internal Server Error   
 */


/**
 * @swagger
 * /delete:
 *   delete:
 *     tags:
 *       - Book routes
 *     description: Used to delete book
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Token for user authentication & authorization
 *         schema:
 *           type: string
 *         required: true  
 *       - in: path
 *         name: id
 *         description: The Book id to be deleted.
 *         schema:
 *           type: object
 *           properties:
 *             uid:
 *               type: string
 *     responses:
 *       '200':
 *         description: Book deleted Successfully
 *       '404':
 *         description: Book not found !
 *       '500':
 *         description: Internal Server Error   
 */

/**
 * @swagger
 * /filter:
 *   get:
 *     tags: 
 *       - Book routes
 *     description: Retrieve a list of books filtered by author and/or publication year.
 *     parameters:
 *       - in: query
 *         name: author
 *         schema:
 *           type: string
 *         description: Filter books by author.
 *       - in: query
 *         name: publicationYear
 *         schema:
 *           type: integer
 *         description: Filter books by publication year.
 *     responses:
 *       '200':
 *         description: A list of books matching the filter criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       '404':
 *         description: No books found matching the filter criteria.
 *       '500':
 *         description: Internal server error.
 */