const {request, response} = require("express");
const express = require("express");  // Requerimos el modulo de express
const mongo = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');

const app= express(); // Definimos una app de express

app.use(express.json()) //Middleware
app.use(cors({
    origin: '*'
}));

const url = "mongodb://localhost:27017";

let db, personas, vuelos, users
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db("angulardb");
    console.log("Conectado a la DB");
    personas = db.collection("personas");
    vuelos = db.collection("vuelos");
    users = db.collection("adminpro-users");
});


app.get("/personas", (request, response) => {
    console.log("Personas");
    personas.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        //response.status(200).json({personas:items});
        response.status(200).json(items);
    });
});

app.get("/persona/:id", (request, response) => {
    console.log("Persona");
    let personaID = request.params.id;
    personas.findOne({id:(personaID)}, function(err,alumno) {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        response.status(200).json({persona:persona});
    });
});

app.post("/personas", (request, response) => {
    console.log("Insert Persona");
    personas.insertOne(
        {
            id : request.body.id,
            name : request.body.name,
            apellido : request.body.apellido,
            ciudad : request.body.ciudad,
            moneda: request.body.moneda
        },
        (err, result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});
        }
    );
});

app.get("/vuelos", (request, response) => {
    console.log("Vuelos");
    vuelos.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        //response.status(200).json({vuelos:items});
        response.status(200).json(items);
    });
});

app.post("/vuelos", (request, response) => {
    console.log("Insert Vuelo");
    vuelos.insertOne(
        {
            numeroVuelo : request.body.numeroVuelo,
            fecha : request.body.fecha,
            horario : request.body.horario,
            origen : request.body.origen,
            destino: request.body.destino
        },
        (err, result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});
        }
    );
});

app.get("/users", (request, response) => {
    console.log("Admin Pro Users");
    users.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }

        //response.status(200).json({vuelos:items});
        response.status(200).json(items);
    });
});

app.post("/users", (request, response) => {
    console.log("Insert Admin Pro User");
    users.insertOne(
        {
            id : request.body.id,
            name : request.body.name,
            email : request.body.email,
            password : request.body.password,
        },
        (err, result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});
        }
    );
});

app.listen(3006, () => {
    console.log("Escuchando al puerto 3006");
});

