const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const Todo = require('./todomodel');



//Middle Wares
app.use(cors());

var jsonParser = BodyParser.json();


//Connection with monodb
mongoose.connect('mongodb://localhost:27017/todos',{useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("connection established with mongoose");
});

//Routes Implementing
app.get('/todos',function(req,res){
    Todo.find(function(err,todos){
        if(err){
            console.log(err);
        }else{
            res.json(todos);
        }
    });
});

app.get('/todos/:id',function(req,res){
    let id = req.params.id;
    Todo.findById(id,function(err,todo){
        if(err){
            console.log(err);
        }else{
            res.json(todo);
        }
    });
});

app.post('/todos/add',jsonParser,function(req,res){
    console.log(req.body);
    let todo = new Todo(req.body);
    todo.save().then(todo => {
        res.json({'todo':'todo added Succesfully'});
    })
    .catch(err =>{
        res.send(err);
    });
});

app.post('/todos/update/:id',jsonParser,function(req,res){
    Todo.findById(req.params.id,function(err,todo){
        if(!todo){
            res.send(404).send('data is not found');
        }else{
            todo.description = req.body.description;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.completed = req.body.completed;

            todo.save(function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Succesfully updated Todo");
                }
            });
        }
    });
});


//Listening to port 4000
app.listen(4000,function(){
    console.log('Listening on port 4000');
});