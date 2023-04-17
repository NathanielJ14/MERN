const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();

require("./configs/mongoose.config")

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


require("./routes/product.routes")(app)


app.listen(8000, ()=>console.log(`Listening on port: 8000`))