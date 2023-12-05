const Person = require("../models/person.model")

module.exports.index = (request, response) => {
    response.json({message: "Hello Syvees!"});
}

// CREATE
module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// GET ALL
module.exports.getAllPeople = (req, res) => {
    Person.find({})
        .then(persons => {
            console.log(persons);
            res.json(persons)
        })
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// GET ONE
module.exports.getPerson = (req, res) => {
    Person.findOne({_id:req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json({message: "Something went wrong", error:err}));
    }

// UPDATE
module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatePerson => res.json(updatePerson))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// DELETE
module.exports.deletePerson = (req, res) => {
    Person.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}