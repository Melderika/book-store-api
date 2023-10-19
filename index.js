const express = require('express')
const app = express()
const port = 5151

// app.get('/',(req,res) =>{
//     res.send("Hello ini express")
// })

// app.get('/',(req,res) =>{
//     res.send("Hello ini lalalal")
// })

app.get('/popice',(req,res) =>{
    res.send("Hello ini pop ice coklat")
})

app.post('/popice',(req,res) =>{
    res.send("Hello ini pop ice melon")
})

app.put('/popice',(req,res) =>{
    res.send("Hello ini pop ice anggur")
})

app.delete('/popice',(req,res) =>{
    res.send("Hello ini pop ice sudah habis")
})


app.listen(port,() => console.log(`Server running on port ${port}`))