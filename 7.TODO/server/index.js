const express = require('express');
const cors = require('cors');
const router = require('./routes/items');

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World 2');
});


app.use('/items', router);

app.listen(PORT, (req, res) => {
console.log(`Serer is running on ${PORT}`);

})