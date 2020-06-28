import express from 'express';
import bodyParser from "body-parser";


const app = express();
const PORT = 3001 || process.env.PORT;


app.get('/', async (req, res) => {
    res.send("hello world")
})

app.get('/new', async (req, res) => {
    res.send("hello world")
})


app.listen(PORT, () => console.log(`server is up and running at :  \nhttp://localhost:${PORT}`));


