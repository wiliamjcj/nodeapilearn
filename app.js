const db = require("./database")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})

app.get("/produtos",(req,res) => {
    /*const queryCallback = function(err,result){
        if(!err){
            res.send(result.rows)
        }
    }

    db.query('select * from produto',queryCallback)
    db.end
    */
   res.send("success")
})

app.post('/produtos', (req, res)=> {
    
   /* const produto = req.body;
    let insertQuery = `insert into produto(nome, descricao ) values('${produto.nome}', '${produto.descricao}')`

    db.query(insertQuery, (err, result)=>{
        if(!err){
            console.log('insert result: ',result)
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    db.end;
    */
   console.log(`received payload ${req.body}`)
   res.send('OK')
})

