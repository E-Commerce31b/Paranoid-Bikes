require("dotenv").config();
const cors = require("cors")
const express = require("express")
const dbConnect = require('./config/mongo')
const fileUpload = require("express-fileupload");
const { bikesToDb } = require("./controllers/bikes");

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "./uploads",
    })
  );

app.use("/api", require("./routes"))

app.listen(PORT, ()=> console.log("Server listening on port " + PORT ))

bikesToDb()//

dbConnect()
