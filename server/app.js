//import required modules
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require('cors');
const swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
dotenv.config();

//initializing the  express
const app = express();
app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("port", process.env.PORT || 8080);

//connecting the mongoDb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", (err) => {
  console.log(err);
});

//bring in routes
const authRoutes=require("./routes/auth") ;
const userRoutes=require("./routes/user");
const showroomRoutes = require("./routes/showroom");
const collectionAgentRoutes = require("./routes/collectionAgent");

//use middleware
app.use(morgan("dev"));
app.use(expressValidator());
app.use(cookieParser());

//Routes
app.use('/',authRoutes);
app.use('/',userRoutes);
app.use('/',showroomRoutes);
app.use('/',collectionAgentRoutes);

//handling the authorization for routes
app.use(function (err, req, res, next) {
  console.log(err)
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      error:true,
      message:"Unauthorized :No authorization token was found"
    })
  }
});

//swagger-document
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentation",
      version: "1.0.0",
      description: "Api Documentation",
      license: {
        name: "",
        url: "",
      },
      contact: {
        name: ":- K.R.SAI CHARAN",
        url: "www.saicharankr.tech",
        email: "saicharankr@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8080/",
      },
    ],
  },
  apis: ["./routes/users.js"],
};

const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
app.listen(app.get("port"), function () {
  console.log("App is running, server is listening on port ", app.get("port"));
});
