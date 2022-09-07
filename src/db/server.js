const cors = require("cors");
const mysql = require("mysql");
const express = require("express");

const app = express();

app.use(cors());

app.use(express.json());

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"z5!gi09oJk,jeW",
    database: 'todo_app'
})

const listener = app.listen(3000, () => {
    console.log('Listening on port: ' + listener.address().port)
})

app.get("/todos", (req, res) => {
    connection.query("SELECT * FROM Todos", (err, result) => {
        err ? console.log(err) : res.send(result);
    });
})

app.post("/todos", (req, res) => {
    const insertQuery = "INSERT INTO Todos SET ?";
    connection.query(insertQuery, req.body, (err, result) => {
        err ? console.log(err) : res.send("Todo added to DB");
    });
})

app.put("/todos", (req, res) => {
    const updateQuery = "UPDATE Todos SET checked = ? WHERE id = ?";
    connection.query(
        updateQuery,
        [req.body.checked, req.body.id],
        (err, result) => {
            err ? console.log(err) : res.send(result);
        }
    );
});

app.delete("/todos/:id", (req, res)=>{
    connection.query("DELETE FROM Todos WHERE id = ?",
        req.params.id,
        (err,result) => {
            err ? console.log(err) : res.send(result);
        }
    );
})

app.delete("/todos_all", (req, res) => {
    connection.query("DELETE FROM Todos", (err, result) => {
        err ? console.log(err) : res.send(result);
    });
})

app.delete("/todos_done", (req, res) => {
    connection.query("DELETE FROM Todos WHERE checked = -1",(err, result) => {
        err ? console.log(err) : res.send(result);
    })
})

