const seedPub = require('./data/seedPublications')
const pg = require('pg');
const client = new pg.Client('postgress://localhost/dealers_choice_db');

const syncAndSeed = async() => {
  const SQL = `
  DROP TABLE IF EXISTS publication;
  CREATE TABLE publication(
      id INTEGER PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      designer VARCHAR(100) NOT NULL,
      publishing_date INTEGER,
    );
  `;
  await client.query(SQL);
};

const connectToClient = async() => {
  try {
    await client.connect();
    await syncAndSeed();
    console.log('Connected to Dealers Choice DB');
  }
  catch (err) {
    console.log(err);
  }
}

connectToClient();