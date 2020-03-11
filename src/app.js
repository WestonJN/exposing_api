const express = require("express");
const path 	  = require('path');
const bodyParser = require("body-parser");
const {addNewVisitor, 
        createTable,
        listVisitors,
        deleteVisitor,
        updateVisitor,
        viewVisitor,
        deleteAllVisitor} = require("./db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

createTable();

app.post("/add-visitor",(req,res) => {

    
    //Our Input data
    let vname=req.body.vname;
    let aname=req.body.aname;
    let age=req.body.age;
    let date=req.body.date;
    let time=req.body.time;
    let comments=req.body.comments;

    //Saving our data
    const visitor = addNewVisitor (vname,aname,age,date,time,comments)
    res.status(200).json({
        status:"Is Okay"
    });
});
app.get('/view-visitor:visitor_id',(req,res)=>{
    
    const visitor= viewVisitor();

    res.status(200).json({
        status: 'Is Okay'
    })
})
app.get('/view-all-visitor',(req,res)=>{
    //View all visitors
    const visitor = listVisitors();

    res.status(200).json({
        status: 'Is Okay'
    })
})
app.delete('/delete-visitor:visitor_id', (req,res,)=>{
    
    const visitor_id =req.params.visitor_id;

    //Deleting a single visitor
    const visitor = deleteVisitor(visitor_id);

    res.status(200).json({
        status:'Is Okay'
    });
});

app.delete('/delete-all-visitors', (req,res) =>{
    
    const visitor = deleteAllVisitor();

    res.status(200).json({
        status:'Is Okay'
    });
});

app.put('/update-visitor:visitor_id',(req,res)=>{
    let vname=req.body.vname;
    let aname=req.body.aname;
    let age=req.body.age;
    let date=req.body.date;
    let time=req.body.time;
    let comments=req.body.comments;

    const visitor_id =req.params.visitor_id;

    const visitor = updateVisitor (visitor_id,vname,aname,age,date,time,comments)
    res.status(200).json({
        status: 'Is Okay'
    })
})

app.listen(5000, () => console.log('Express Server is running on Port: 5000'));


// module.exports = server;