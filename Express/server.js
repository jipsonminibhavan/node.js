// Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// neue Instanz
const server = express();

// statische Dateien
server.use(express.static("./public"));

//Template Engine
server.use(expressLayouts);
server.set("layout", "./layouts/default");
server.set("view engine", "ejs");

// Routes
server.get("/", (request, response) => {
  //response.send("Hallo Welt!");
  // response.status(500).send("Fehler auf dem Server!");
  //response.download("./server.js");
  // response.json({ message: "Hallo Welt!" });
  response.render("index", { text: "Welt" });
});

const projectRouter = require("./routes/projects");
server.use("/projekte", projectRouter);

// WebServer an Port 3000
server.listen("3000", () => console.log("Server gestartet"));
