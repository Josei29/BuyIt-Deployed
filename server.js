// Setting our dependecies and requiring the npm packages for our server-side code
// Express to create our own server
const express = require("express");
const path = require("path");
// Very useful npm package if you're using MongoDB
const mongoose = require("mongoose");
// Creating our PORT
const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use("/static", express.static("client/build"));
}

// Creating the connection to our DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buyit");

// Routes are in a different file, so we request the file 
const userRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");
// This will make our app be able to get the routes
app.use(userRoutes, dataRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Finally the app goes live
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});