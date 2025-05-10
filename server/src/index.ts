import express from "express";
import { Database } from "sqlite3";
import { Request, Response, NextFunction } from "express";
import { Router } from "express";
import cors from "cors"; // Import the cors package

const app = express();

app.use(express.json());

const db = new Database("./db/db.sqlite");

// Enable CORS globally
app.use(cors());

// Initalise the 'games' table, if you want to "restart" the database, you can delete the db/db.sqlite file
db.run(
  `CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player_winner TEXT NOT NULL
  )`,
  (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log("Table 'games' is ready.");
    }
  }
);

// Get the scores
const getGames = (req: Request, res: Response, next: NextFunction) => {
  db.all(
    `SELECT player_winner, COUNT(*) as count
     FROM games
     GROUP BY player_winner`,
    (err, rows) => {
      if (err) {
        next(err);
      } else {
        res.json(rows);
      }
    }
  );
};

// create a game, this could be improved by adding more info about the game as above
const createGame = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Creating game with body:", req.body);

  const { player_winner } = req.body;

  if (!player_winner) {
    res.status(400).json({ error: "player_winner is required" });
    return;
  }

  db.run(
    "INSERT INTO games (player_winner) VALUES (?)",
    [player_winner],
    function (err) {
      if (err) {
        next(err);
      } else {
        res.status(201).json({ id: this.lastID, player_winner });
      }
    }
  );
};

// Set up routes to hit the database
const router = Router();
router.get("/api/v1/games", getGames);
router.post("/api/v1/games", createGame);
// Same route, different method

app.use(router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { app };
