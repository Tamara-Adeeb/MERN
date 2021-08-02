const express = require('express');
const app = express();

require("./server/config/config");
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./server/routes/route");
AllMyUserRoutes(app);
app.listen(8000);