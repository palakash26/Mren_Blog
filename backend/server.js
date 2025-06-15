const express = require('express');
const app =  express();
const router =  require("./routers/blogRouter");
const cors = require('cors');
const DbConnection = require('./DB/db');
require('dotenv').config();


const PORT = 5001;

app.use(cors());
DbConnection()
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/blogs',router);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});