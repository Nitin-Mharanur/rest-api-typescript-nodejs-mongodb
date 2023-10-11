import { Request, Response } from 'express';
import routers from './routers';
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const { connectToMongoDB } = require('./connect');

const app = express();
const port = 3000;

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!');
});
app.use('/api', routers());

connectToMongoDB('mongodb://127.0.0.1:27017/rest-api-typescript-nodejs-mongodb')

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});