import express from 'express';

const app = express();


app.get('/', async (req , res)=>{
res.send(`
<h1>Welcome to the app</h1>
<h2>Name: Suraj Prakash</h2>
`)
})


app.listen(8000, () => {
console.log('Server is running on port 8000');
})