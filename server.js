const {client, syncAndSeed} = require('./db/db')

// Eventually move this to app.js...

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const homePage = require('./views/homePage');
const PORT = process.env.port || 3000;

// Access to Public Folder 
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname + '/public')))

// Home Page 
app.get('/', async(req, res, next) => {
  try {
    const data = await client.query('SELECT * FROM publication');
    console.log(data.rows);
    res.send(homePage(data.rows));
  }
  catch (err) {
    next(err);
  }
})

//
  
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