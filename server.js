import http from 'node:http';
import { getDataFromDb } from './database/db.js';
import { sendResponseWithHeaderAndStatus, JSON_MIME, HTTP_OK, HTTP_NOT_FOUND, getDataByPathParams } from './utils/utils.js';

const PORT = 8000;


const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDb();

    if (req.url === '/api' && req.method === 'GET') {
        sendResponseWithHeaderAndStatus(res, JSON_MIME, HTTP_OK, destinations)
    }
    else if (req.url.startsWith("/api/continent") && req.method === 'GET') {
        const continent = req.url.split("/").pop();
        const filteredData = getDataByPathParams(destinations, 'continent', continent);
        sendResponseWithHeaderAndStatus(res, JSON_MIME, HTTP_OK, filteredData);
    }
    else if (req.url.startsWith("/api/country") && req.method === 'GET') {
        const country = req.url.split("/").pop();
        const filteredData = getDataByPathParams(destinations, 'country', country);
        sendResponseWithHeaderAndStatus(res, JSON_MIME, HTTP_OK, filteredData);
    }
    else {
        sendResponseWithHeaderAndStatus(res, JSON_MIME, HTTP_NOT_FOUND, { error: 'Not Found', message: 'The requested route does not exist' })
    }
});

server.listen(PORT, () => console.log(`server is running on port: ${PORT}`));