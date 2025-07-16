import http from 'node:http';
import { getDataFromDb } from './database/db.js';

const PORT = 8000;


const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDb();
    console.log(destinations, req.url, req.method);
    if(req.url === '/api' && req.method==='GET'){
        res.end(JSON.stringify(destinations))
    }
});

server.listen(PORT, ()=>console.log(`server is running on port: ${PORT}`));