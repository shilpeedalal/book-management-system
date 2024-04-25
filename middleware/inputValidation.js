const { body, validationResult } = require('express-validator');


const validateCreateBook = [
    body('title').notEmpty(),
    body('author').notEmpty(),
    body('publicationYear').isInt(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateCreateBook
