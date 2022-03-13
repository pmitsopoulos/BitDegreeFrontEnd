import express, { response } from "express";
import fs from "fs";
import quotesJackHandey from "./public/quotes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {Quote} from "./models/quote.js"

dotenv.config();

const app = express();
const PORT = 3000;
const connectionString = process.env.CONNECTION_STRING;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));



//DB Connection Establishment
await mongoose
.connect(connectionString,{useNewUrlParser : true, useUnifiedTopology:true })
.then(()=>{
    app.listen(3050,()=>{
        console.log(`database connected`);
    })
})
.catch((err)=>console.log(err));

const db = mongoose.connection;


//Server initialization
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.\n http://localhost:${PORT}`);
})

//db.on("error", console.error.bind(console,"Unable to establish connection..."));

/*Router */
app.get("/",(req,res)=>{
    
    // const quotes = [
    //     {author: "Mits", snippet: "If you are a lemon you can never be an apple"},
    //     {author:"Caulo Pauelhio", snippet: "If you are stupid you are not smart"},
    //     {author: "Babas", snippet: "The earth is neither flat nor round it is under our feet"}
    // ];
    res.redirect("/quotes");
});

app.get("/about",(req,res)=>{
    res.render("about",{title:"About Random Quotes"});
});

app.get("/randomJS",(req,res)=>{
    const index = Math.round(Math.random() * (quotesJackHandey.length-1));
    res.send(quotesJackHandey[index]);
});

app.get("/quotes", (req,res)=>{
    Quote.find()
    .then((result)=>{
        res.render("index",{quotes: result, title: "Quotes"});
    })
    .catch((err)=>console.log(err));  
})

app.get("/quotes/create",(req,res)=>{
    res.render("create", {title:"Quote Creation"});
});

app.get("/quotes/:id",(req,res)=>{
    const id = req.params.id;

    Quote.findById(id)
    .then((result)=>{
        res.render("details",{quote: result, title: result.snippet});
    }).catch((err)=>{console.log(err)});
});

app.post("/quotes",(req,res)=>{
    
    const quoteTBC = new Quote ({
        author: req.body.author, 
        snippet: req.body.snippet,
        body: req.body.body
    })
    
    quoteTBC.save()
    .then(()=>res.redirect("/quotes"))
    .catch((err)=>res.send(err));
})

app.delete("/quotes/:id",(req,res)=>{
    const id = req.params.id;
    Quote.findByIdAndDelete(id)
    .then((result)=>{
        console.warn("Deleted Successfully");
        res.redirect("/quotes");
    }).catch((err)=>{console.error(err)});
});

//Default behavior when error 404 occurs
app.use((req,res)=>{
    res.status(404).res.render("404.ejs");
});


