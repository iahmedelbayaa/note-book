import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello Be3o!")
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})