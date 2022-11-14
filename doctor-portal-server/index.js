const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Doctors Portal Running!')
});

app.listen(port, () => {
    console.log(`Doctors Portal listening at http://localhost:${port}`)
});
