const db = require("./database")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000,()=>{
    console.log("Running at port 3000 ...")
})

app.get("/produtos",(req,res) => {
    const queryCallback = function(err,result){
        if(!err){
            res.send(result.rows)
        }
    }

    db.query('select * from produto',queryCallback)
    db.end
})

app.post('/produtos', (req, res)=> {
    
    const produto = req.body;
    let insertQuery = `insert into produto(nome, descricao ) values('${produto.nome}', '${produto.descricao}')`

    db.query(insertQuery, (err, result)=>{
        if(!err){
            console.log('insert result: ',result)
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    db.end;
})

