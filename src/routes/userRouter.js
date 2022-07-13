const express = require("express");
const router = express.Router();
const employeeSchema = require("../models/employees.model");

const mongoose = require("../mongoose");
//const employees = require("../utils/employees.storage");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");



//POST (create new element)--------------------------------------------------------------------------

router.post("/employees", (req, res) => {
    const employee = employeeSchema(req.body);
    employee.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//GET (get all elements)---------------------------------------------------------------------------

router.get("/employees", (req, res) => {
    employeeSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//GET (get single element) ------------------------------------------------------------------
router.get("/user/:id", (req, res) => {
    const { id } = req.params;
    employeeSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



//PUT (update element) --------------------------------------------------------------------
router.put("/employees/:id", (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, designation, tags, age } = req.body;
    employeeSchema
        .updateOne({ _id: id }, { $set: { first_name, last_name, designation, tags, age } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

