const express = require("express")
const dotenv = require("dotenv")
const app = express()
const connectDb = require("./config/database.js")
const userRoute = require("./routes/userRoutes.js")
const bookRoute = require("./routes/bookRoutes.js")
const swaggerJSDoc = require("swagger-jsdoc") ;
const swaggerUi = require("swagger-ui-express") ;
dotenv.config()

connectDb()
app.use(express.json())

const port = process.env.port || 3000
app.get('/',(req,res)=> {
    res.status(200).json({message: "Backend Connected"})
})

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Book-Management-System",
        description: "API information related to all the API endpoints available",
        version: '1.0.0',
        contact: {
          name: "SBK",
        },
        servers: [`${process.env.SERVERIP}:3000`], 
      },
    },
    apis: ["Utils/Swagger.js"],
  };
  
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(userRoute)
app.use(bookRoute)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})