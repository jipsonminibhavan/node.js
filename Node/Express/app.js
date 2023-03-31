const express = require("express");
const app = express(); //neue Instanz von express Objekt

app.use(express.static("public"));

/* app.get("/", (request, response) => {
  response.send("<h1>Hallo Welt!<h1>");
}); */

app.listen(3000, () => {
  console.log(" Webserver läuft unter Port 3000 ");
});
