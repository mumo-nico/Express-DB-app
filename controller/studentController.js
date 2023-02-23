const Student = require('../models/students');

//get all students
exports.getAllStudents = async (req, res) => {
    try {
        const student = Student.findAll();
        res.send(student);
    } catch(error){
        console.log(error);
    }
}

// get student by id
exports.getStudentById = async (req, res) => {
    try {
       const student = await Student.findAll({
           where: {
               id: req.params.id
           }
       })
    } catch(error){
        console.log(error);
    }
}

//create students
exports.createStudent = async(req,res) => {
    try {
        Student.create(req.body);
        console.log(req.body);
        res.send('student created');
    } catch(error){
        console.log(error);
    }
}