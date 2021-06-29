import express from "express";
// const express=require('express');
import mongoose from 'mongoose'
import { User } from "./models/users.js";
// const mongoose=require('mongoose');
// const { User } = require('./models/users');
// const { User } = require('./models/users');
// import express from "express";

const app=express();
const PORT=5000;

const USERS=[
    {
     "createdAt": "2021-06-27T16:45:44.145Z",
     "name": "Ernest Bruen",
     "avatar": "https://cdn.fakercloud.com/avatars/badlittleduck_128.jpg",
     "id": "1"
    },
    {
     "createdAt": "2021-06-28T14:59:36.387Z",
     "name": "Ora Collier",
     "avatar": "https://cdn.fakercloud.com/avatars/lebinoclard_128.jpg",
     "id": "2"
    },
    {
     "createdAt": "2021-06-27T21:07:44.668Z",
     "name": "Dr. Eula Cassin",
     "avatar": "https://cdn.fakercloud.com/avatars/doronmalki_128.jpg",
     "id": "3"
    },
    {
     "createdAt": "2021-06-28T12:05:04.618Z",
     "name": "Dr. Eunice Cummings",
     "avatar": "https://cdn.fakercloud.com/avatars/simobenso_128.jpg",
     "id": "4"
    },
    {
     "createdAt": "2021-06-28T12:39:18.041Z",
     "name": "Mary Emard",
     "avatar": "https://cdn.fakercloud.com/avatars/kirangopal_128.jpg",
     "id": "5"
    },
    {
     "createdAt": "2021-06-28T14:09:47.541Z",
     "name": "Cora Carroll MD",
     "avatar": "https://cdn.fakercloud.com/avatars/gonzalorobaina_128.jpg",
     "id": "6"
    },
    {
     "createdAt": "2021-06-28T16:18:12.527Z",
     "name": "Josefina Robel",
     "avatar": "https://cdn.fakercloud.com/avatars/popey_128.jpg",
     "id": "7"
    },
    {
     "createdAt": "2021-06-27T22:51:44.509Z",
     "name": "Bernice Schimmel",
     "avatar": "https://cdn.fakercloud.com/avatars/ludwiczakpawel_128.jpg",
     "id": "8"
    },
    {
     "createdAt": "2021-06-28T08:27:41.117Z",
     "name": "Zachary Medhurst",
     "avatar": "https://cdn.fakercloud.com/avatars/amywebbb_128.jpg",
     "id": "9"
    },
    {
     "createdAt": "2021-06-28T02:38:19.534Z",
     "name": "Miguel Reilly",
     "avatar": "https://cdn.fakercloud.com/avatars/stevedesigner_128.jpg",
     "id": "10"
    }
   ]
   //opened connection to DB
   const url="mongodb://localhost/movieData";
   mongoose.connect(url,{useNewUrlParser : true});
   const con=mongoose.connection;
   con.on('open',()=>console.log('mongoDB is connected'))
   // middle ware
   app.use(express.json());
app.get('/',(request,response)=>{
    response.send('Welcome to node App !!!');
})
app.get('/users',async (request,response)=>{
    const users=await User.find();
    // console.log(users);
    response.send(users);

});
app.get('/users/:id',async (request,response)=>{
    const {id}=request.params;
    const users=await User.find({id : id})
    console.log(users);
    response.send(users);
});
// app.get('/users/:id',(request,response)=>{
//     const user=USERS.find(e=>e.id===request.params.id)
//     response.send(user);
// });
// Add users
// app.post('/users',(request,response)=>{
//     const addUser=request.body;
//     console.log(addUser);
//     USERS.push(addUser);
//     response.send(USERS);
    
// });
//Add users
app.post('/users',async (request,response)=>{
    // const users=await User.find();
    const addUser= request.body;
    console.log(addUser);
    const user=new User({
        id:addUser.id,
        name:addUser.name,
        avatar:addUser.avatar,
        createdAt:addUser.createdAt,

    })
     // const user=new User(addUser);
    try{
        const newUser= await user.save();
        response.send(newUser);
    }
   catch(err){
         response.send(err)
   }
    // delete users 
    // app.delete('/users/:id', async (request,response)=>{
    //     const {id}=request.params;
    //     try{

    //         const user=await User.findById(id);
    //         await user.remove();
    //         console.log(user);
    //         console.log(id)
            
    //         response.send({message: "Deleted the user successfully"})
    //     }
    //     catch(err){
    //         response.send(err)
    //         console.log(err);
    //   }
    // })
    // remove
    //   app.delete("/users/:id", async (request, respone) => {
    //     const { id } = request.params;
    //     try {
    //       const user = await User.find({id : id});
    //       console.log(user);
    //       await user.remove();
         
    //       respone.send({ ...user, message: "Deleted successfully" });
    //     } catch (err) {
    //       respone.status(500);
    //       respone.send("User is missing");
    //     }
    //   });
});

app.listen(PORT,()=>console.log('the server is started in ' + PORT));