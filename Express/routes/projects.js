const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("", { layout: "./layouts/special" });
});

router.get("/neu", (request, response) => {
  response.render("projectNew", { layout: "./layouts/special" });
});

router.post("/", (request, response) => {
  response.send("Projekt angelegt");
});

//dynamisch URL/Routes am Ende legen
router.route("/:id").get((request, response) => {
  let ID = request.params.id;
  response
    .render("project", {
      layout: "./layouts/special",
      projektID: ID,
    })
    .put((request, response) => {
      response.send("Projekt aktualisiert");
    })
    .delete((request, response) => {
      response.send("Projekt gelöscht");
    });
});

module.exports = router;
