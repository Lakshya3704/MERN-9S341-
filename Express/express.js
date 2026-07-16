const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Response send from server");
});


app.get('/login',(req,res)=>{
    // res.status(201);
    res.send("Response from login page");
});
app.post('/login',(req,res)=>{
    res.status(202);
    res.send({success : true, message : "Repsonses from post"});
})

const students = [
    {
        id:1,name: "Tom", age: 21,course: "MERN"
    },
    {
        id:4,name: "Som", age: 25,course: "MERN"
    },
    {
        id:2,name: "Jonw", age: 22,course : "Development"
    },
    {
        id:3,name: "Jerry", age: 24,course :"Java"
    },
    {
        id :4, name: "Tom",age: 25,course : "CPP"
    }
]
app.get('/student/:id',(req,res)=>{
    const id = Number(req.params.id);
    const student = students.find(s => s.id ===id);
    if(student){
        res.json({
            success:true,
            data:student
        })
        return;
    }
    res.json({
        success: false,
        message: "Data dose not exist"
    });
    return;
})

app.get('/student/:name/:course',(req,res)=>{
    const name = req.params.name;
    const course = req.params.course;
    const student = students.find(s => s.name === name && s.course === course);
    if(student){
        res.json({
            success: true,
            data : student
        });
        return;
    }
    res.json({
        success: false,
        message: "Data not find"
    });
    return;
})

app.get('/search',(req,res)=>{
    const course = req.query.course;
    const student = students.filter(s => s.course === course);
    if(student){
        res.json({
            success : true,
            data : student
        });
        return;
    }
    res.json({
        success: false,
        message: "Don't find student"
    })
    return;
})
app.put('/student/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.findIndex(s => s.id === id);
    if (student !== -1) {
        students[student] = req.body; 
        res.json({
            success: true,
            message: "Student updated successfully",
            data: students[student]
        });
        return;
    }
    res.json({
        success: false,
        message: "Student data not upadted"
    });
    return;
})
app.listen(3000,()=>{
    console.log("Server runnning on 3000 port");
})