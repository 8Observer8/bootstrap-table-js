const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", (req, res) => { res.render("home.hbs"); });

const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;
httpServer.listen(port, () => { console.log("Server started. Port: " + port); });
