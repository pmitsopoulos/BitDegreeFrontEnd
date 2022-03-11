import express from "express"

const router = express.Router();

router
.get("/",(req,res)=>{
    res.send("Greetings from the server!");
})

.get("/search/:q",(req,res)=>{
    const query = req.params.q;
    //console.log(req.params);
    res.send(`You searched for : ${query}`);
})

export default router;