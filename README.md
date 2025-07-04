# Hello 👋

### Getting Started

To run the code. I wasn't able to get a dockerfile working in time so you'll need two terminals.

In terminal A:

- Run `cd client`
- Run `npm install`
- Run `npm run start`

In terminal B:

- Run `cd server`
- Run `npm install`
- Run `npm run start`

When running the server, an SQLite file should appear as `server/db/db.sqlite`. It resets whenever the database reruns.

You can run tests with `npm test` in the client, which runs the core game logic function.

### Notes

I used SQLite for the database because it meant it could just be stored as a file so it's the simplest way to get something functional for this project. I'd never used SQLite before though. I'm also not very familiar with express, but it's the simplest to implement for this project

# Tic-Tac-Toe

The below problems are to allow us a glimpse into your problem solving ability, style and current skill set. Please do problem 1, and optionally problem 2 or 3 depending on where you are most comfortable. We expect this test to take 2-3 hours, if you find yourself spending more than this do not aim to solve all 3 problems! We will not be judging based on number of problems completed only the style and thought process.

## Problems

### Problem 1

We have started a basic game of Tic-Tac-Toe as outlined [here](https://en.wikipedia.org/wiki/Tic-tac-toe) but we don't have anyone good enough to code to finish it!

- Please implement a complete basic game of Tic-Tac-Toe
- Please use React and TypeScript throughout, if you know TailwindCSS please expand on what is already provided, otherwise it is fine to use raw styling
- Both players will play out of the same application, it is sufficient to just switch the current player each time a move is played
- Once a game is completed, I should be able to start another game

### Problem 2

We are bored with the basic game now, can you make it so the board can be scaled to any size?

- Add some kind of input which allows me to change the board size
- The board size should be a number between 3 and 15

### Problem 3

We want to store game results in a database.

- create a simple backend server (using a simple generator provided by your IDE is fine)
- use any SQL/noSQL database to store the results
- return simple stats back to the front-end: number of win/losses for each player.

Simplification for the task:

- do not use database migration tools, just an SQL or other script to create tables is fine
- add comments about what you were thinking about but didn’t implement because of restrictions
- host the project on your local machine, optional hosting in a public place is fine
- optionally create a Dockerfile to build both back-end and front-end. Do not create any deployment scripts, if it's not necessary.
- optional tests are welcome

## Quickstart

- Make sure you have **node** installed
- `cd client`
- `npm i`
- `npm start`
