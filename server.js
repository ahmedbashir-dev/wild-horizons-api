import http from 'node:http';
import { getDataFromDb } from './database/db.js';

const PORT = 8000;


const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDb();

    if(req.url === '/api' && req.method==='GET'){
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(destinations));

    }
});

server.listen(PORT, ()=>console.log(`server is running on port: ${PORT}`));