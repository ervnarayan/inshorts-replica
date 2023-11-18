import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from './config';
import router from './routers';
import dbConnect from './db';

const app = express();
app.use(cors());

dbConnect();
app.use('/api/v1', router);

app.listen(SERVER_PORT, (err)=>{
    if(!err){
        console.log(`Server is listening on : http://localhost:${SERVER_PORT}`);
    }
});
