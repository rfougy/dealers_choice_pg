const pg = require('pg');
const client = new pg.Client('postgress://localhost/dealers_choice_db');

const syncAndSeed = async() => {
  const SQL = `
  DROP TABLE IF EXISTS publication;
  CREATE TABLE publication(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    designer VARCHAR(100) NOT NULL,
    publishing_date INTEGER NOT NULL,
    description VARCHAR(2000) NOT NULL
    );
    INSERT INTO publication(id, name, designer, publishing_date, description) VALUES(1, 'East Meets West', 'Issey Miyake', 1978, 'The book, Issey Miyake: East Meets West, came out in 1978 and features an impressive contrast of designs influenced by both Eastern and Western cultures. East Meets West was the first ever monograph that was created about the living fashion designer, and its importance is unquestionable. With over 200 pages of full bleed color images featuring some of Issey Miyake’s colorful clothing, the book truthfully depicts the designer’s passion for design, culture, and authenticity.');
    INSERT INTO publication(id, name, designer, publishing_date, description) VALUES(2, 'CREAM Issue 09', 'Maison Margiela', 2008, 'As demonstrated in Cream Issue 09, no one designer has managed to match Margielas design capability and ingenuity at MMM since his departure. From interviews with Margiela himself to photos of avant-garde creations made of recycled objects, the designers pandora box of creativity flows freely in Cream Issue 09, with his uninhibited creativity being on full display.');
    INSERT INTO publication(id, name, designer, publishing_date, description) VALUES(3, 'Visionaire 20', 'Comme des Garcons', 1997, 'Released in very limited amounts in 1997, Comme des Garcons Visionnaire 20 was a rare peek back into the archives of Rei Kawakubo and Comme des Garcons. The book itself was highly limited, with only 2,800 copies being produced, and each one being hand numbered. Whats contained within the pages of this book is more interesting than its limited nature');
    INSERT INTO publication(id, name, designer, publishing_date, description) VALUES(4, 'SIX 1/4', 'Comme des Garcons', 1997, 'Featured in CDG SIX 1/4 in collaboration with Visionaire No. 20, the advertising images were featured next to photos of seafood and various crustaceans of similar colors. In the amorphous designs of that season, Kawakubo may have been referencing humanitys genetic origins, or perhaps even the way forms mutate and shift over millennia as evolution takes its course.');
    INSERT INTO publication(id, name, designer, publishing_date, description) VALUES(5, 'Underman Photo Book', 'Undercover', 2011, 'The photo book consists of 36 images storytelling the journey of Underman and his encounters with the lost souls and several enemies, such as Pyranoid and Mashra. The book essentially forces Undercover’s audience to be temporarily removed from the consumption of fashion while beginning a new task: reading a comic book strip by Jun Takahashi and his team. It is experiences like these that cement Undercovers legacy as a pioneer in modern day fashion history.');
    INSERT INTO publication(id, name, designer, publishing_date, description) VALUES(6, 'Street Special Edition', 'Maison Margiela', 1999, 'The two volumes covered all of Maison Martin Margiela’s collections up to Spring/Summer 1999, as well as the first presentation of 10, a mens wardrobe, and Maison Martin Margielas participation in three exhibitions held in Brussels, Florence and Rotterdam. The beauty of the two volumes is that Maison Martin Margiela had full creative control of the images used and the layout of the two volumes.');
    `;
    await client.query(SQL);
  };

  module.exports = { client, syncAndSeed }