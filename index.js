require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = express.Router();

// Database setup
mongoose.connect("mongodb://localhost:auth/auth", {useNewUrlParser: true, useCreateIndex: true})

// Middlewares setup
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// If we are in production, serve our clients build folder
// This folder is created during production only
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client-build"));
}

// Routes setup
const routes = require("./routes");

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

// Error Handling Goes Here
// app.use(routes);
app.use(routes, (req, res) => {
    // No matching route for URL Found
    res.status(404).json({
        error: '404: Resource not found.'
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))