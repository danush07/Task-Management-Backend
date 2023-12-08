const express = require('express')
const connectDB = require('./MongoDb/db');
const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config()

connectDB()
let app = express()
app.use(express.json())


const cors = require('cors');
app.use(cors());




//routes
app.use(
  "https://task-management-backend-hpay.onrender.com/api/users",
  require("./routes/userRoutes")
);
app.use(
  "https://task-management-backend-hpay.onrender.com/api/projects",
  require("./routes/projectRoutes")
);



app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server Running on PORT ${process.env.PORT}`))
