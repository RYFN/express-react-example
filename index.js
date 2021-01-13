import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const PORT = 3000;

const db = new sqlite3.Database("./data/gb.db");

const findResults = async (query) => {
  const result = new Promise((resolve, reject) => {
    let sql = `SELECT name, latitude, longitude FROM locations
           WHERE name LIKE ''||?||'%'
           ORDER BY name
           LIMIT 500`;

    db.all(sql, [query], (err, rows) => {
      if (err) {
        reject(err);
      }

      resolve(rows);
    });
  });

  return result;
};

app.use(express.static("public"));

app.get("/locations", async (req, res) => {
  if (!req.query.q || req.query.q.length < 3) {
    res.status(400);
    res.send();
  } else {
    try {
      const foundResult = await findResults(req.query.q);
      res.json(foundResult);
    } catch (ex) {
      const error = { message: "unfortunately something went wrong!" };
      console.log(ex);
      res.status(500);
      res.json(error);
    }
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
