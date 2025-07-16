export function sendResponseWithHeaderAndStatus(res,contentType, statusCode, data){
    res.setHeader('Content-Type', contentType);
    res.statusCode = statusCode;
    res.end(JSON.stringify(data));
}

export const JSON_MIME = "application/json";
export const HTTP_OK = 200;
export const HTTP_NOT_FOUND = 404;