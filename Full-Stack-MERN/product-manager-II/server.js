const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/product.config');
app.use(cors());
app.use(express.json());
const port = 8000; 
app.use(express.urlencoded({ extended: true })); 
require('./server/routes/product.route')(app);
app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
})