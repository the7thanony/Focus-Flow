import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const tasks=[];
const task2=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res) => {
    res.render("today.ejs",{tasks : tasks,task2:task2});
})

app.get("/work",(req,res) => {
    res.render("work.ejs",{task2 : task2,tasks : tasks});
})

app.post("/submit",(req,res) => {
    const data=req.body["info"];
    if(data){
        tasks.push(data);
    }
    console.log(data);
    res.render("today.ejs",{tasks : tasks});
})

app.post("/submit2",(req,res) => {
    let data2=req.body["infowork"];
    if(data2){
        task2.push(data2);
    }
    res.render("work.ejs",{task2 : task2});
})
app.listen(port,() => {
    console.log(`Listening to port ${port}`);
})


