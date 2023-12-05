const PersonController = require("../controllers/person.controller");

module.exports = (app) => {
    app.get("/api", PersonController.index);
    app.get("/api/people", PersonController.getAllPeople); // GET ALL
    app.get("/api/people/:id", PersonController.getPerson); // GET ONE
    app.post("/api/people", PersonController.createPerson); // CREATE
    app.patch("/api/people/:id", PersonController.updatePerson); // UPDATE
    app.delete("/api/people/:id", PersonController.deletePerson); // DELETE
}   