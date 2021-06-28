const express=require('express');
const app=express();
const PORT=8080;
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
   // middle ware
   app.use(express.json());
app.get('/',(request,response)=>{
    response.send('Welcome to node app');
})
app.get('/users',(request,response)=>{
    response.send(USERS);
});
app.get('/users/:id',(request,response)=>{
    const user=USERS.find(e=>e.id===request.params.id)
    response.send(user);
});
// Add users
app.post('/users',(request,response)=>{
    const addUser=request.body;
    console.log(addUser);
    USERS.push(addUser);
    response.send(USERS);
    
});
app.listen(PORT,()=>console.log('the server is started in ' + PORT));