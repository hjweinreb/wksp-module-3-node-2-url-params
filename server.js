"use strict";

const express = require("express");
let app = express();
const morgan = require("morgan");

const { top50 } = require("./data/top50");

const PORT = 8002;

express()
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  // Any requests for static files will go into the public folder
  .use(express.static("public"))
  // We are using ejs as our templating engine. see https://ejs.co/
  .set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// endpoints here
app.get("/top50", (req, res) => {
  res.render("pages/top50", {
    title: "Top 50 Songs Streamed on Spotify",
    top50: top50
  });
});

app.get("/top50/popular-artist", (req, res) => {
  let currentArtist;
  let artistAndStreams = [];
  var currentStreams = 0;

  let addStreams = top50.filter(streams => {
    top50.artist.includes(currentArtist);
    {
      currentArtistSongs.streams;
    }
  });
  for (let x = 0; x < top50.length; x++) currentArtist = top50[x].artist;
  addStreams();
  res.render();
});
// handle 404s
app.get("*", (req, res) => {
  res.status(404);
  res.render("pages/fourOhFour", {
    title: "I got nothing",
    path: req.originalUrl
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
