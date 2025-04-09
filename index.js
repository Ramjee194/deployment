const express = require('express');
const cors = require('cors');

//initialize express
const app=express()


// //MIddleware
// app.use(cors())

//routes
app.get('/',(req,res)=>{
   
    res.send("app is working ")
})

app.get('/api/v1', (req, res) => {
    res.json('main api here')
})
//port
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app is runnig on port ${PORT}`)
})