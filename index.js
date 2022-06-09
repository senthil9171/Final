const express = require("express")

const app = express()

const port = 3000


const a = 10

// console.log("test")

app.get("/about", (req, res)=>{

    res.send({ about : "this is about snthil"})


})


app.get("/fast", (req, res)=>{

    // console.log(req)

    res.send("<h1>this is fast, and fast route s<h1>")

})


app.get("/",(req,res)=>{

    res.send({ a : "added release pipeline by senthil"})

})


app.listen(process.env.PORT || port, ()=>{

    console.log(`server is running on port ${port}`)

})