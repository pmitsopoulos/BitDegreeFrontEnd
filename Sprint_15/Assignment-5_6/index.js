import express from "express";
import router from "./router/routes.js"

const app = express();

app.use(router);
app.listen(3000,()=>{
    console.log("The server is running on port 3000");
})

