const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const port =  3000;
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index'))
app.listen(port, function (err) {
    if (err)
        console.log('Error :', err);
    else
        console.log(`Server is running on ${port}`);
}
)