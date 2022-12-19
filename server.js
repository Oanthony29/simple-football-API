import ('./Config/dbConfig.js')
import express from 'express';
import route from './Routes/route.js';

const app = express();
app.use(express.json());
app.use('/api/v1', route);

const port = 2000;
app.listen(port, ()=>{
    console.log(`connecting to server....: ${port}`)
});