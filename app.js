const {client, syncAndSeed} = require('./db/db');
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.port || 3000;

//Connecting to Public Folder...
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname + '/public')));

//Connecting to Routes...
const routes = require("./routes/publications");
app.use("/publications", routes);

//Redirecting to Publications Routes...
app.get('/', (req, res, next) => {
  try {
    res.redirect('/publications');
  }
  catch(err) {
    console.log(err);
  }
});
  
//Connecting to Client...
const connectToClient = async() => {
  try {
    await client.connect();
    await syncAndSeed();
    console.log('Connected to Dealers Choice DB');
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`)
      });
    }
  catch (err) {
    console.log(err);
  }
}
  
connectToClient();