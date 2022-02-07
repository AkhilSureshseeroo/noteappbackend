const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const usersRoutes=require('./routes/userRoute');
const notesRoutes=require("./routes/notesRoute");
const url='mongodb+srv://Akhil:mongo4node@db.xfsfd.mongodb.net/users?retryWrites=true&w=majority'

mongoose.connect(url,{useNewUrlparser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log("connected...")
})


const app=express();
const PORT=5000;

app.use(bodyParser.json());

app.use('/users',usersRoutes);
app.use('/notes',notesRoutes);

app.get('/',(req,res)=>{
    console.log("testing");
    res.send("hello from homepage");
});

app.listen(PORT,()=>console.log(`Server running on port:http://localhost:${PORT}`));