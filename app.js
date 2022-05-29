const express=require('express');
const app=express();
const path = require("path");
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'uploads')));
const routes = require('./routes');
app.use(routes)
module.exports = app;


