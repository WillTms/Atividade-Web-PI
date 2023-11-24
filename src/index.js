const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const db = require('./db');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(db);
app.use(router);

/*const paginasPath = path.join(__dirname,"../","paginas");
console.log(paginasPath);
app.use("/paginas", express.static(paginasPath,{
    setHeaders:(res, path) => {
        console.log(path)
      if (path.endsWith(".css")){
        res.setHeader("Content-Type","text/css");
      }
    },
}));*/

/*app.use(express.static(__dirname + "/paginas"));*/

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname,"../paginas","login.html"));
});


app.listen(3333, ()=>{
    console.log("Servidor pocando")
});


