import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from './config';
import router from './routers';

const app = express();
app.use(cors());

app.use('/api/v1', router);

app.listen(SERVER_PORT, (err)=>{
    if(!err){
        console.log(`Server is listening on : http://localhost:${SERVER_PORT}`);
    }
});
