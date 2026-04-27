// import express from 'express';

// const app = express();


// app.get('/', async (req , res)=>{
// res.send(`
// <h1>Welcome to the app</h1>
// <h2>Name: Suraj Prakash</h2>
// `)
// })
// module.exports=app;


// app.listen(8000, () => {
// console.log('Server is running on port 8000');
// })


import express from 'express';

const app = express();

app.get('/', async (req, res) => {
    res.send(`<h1>Welcome to the app</h1>
<h2>Name: Suraj Prakash</h2>`);
});

export default app;   // ✅ FIXED

// Only start server if not in test
if (process.env.NODE_ENV !== 'test') {
    app.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
}