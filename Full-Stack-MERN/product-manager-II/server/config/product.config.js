const mongoose = require('mongodb');
mongoose.connect('mongodb://localhost/product-II-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Something went wrong when connecting to the database", err));