export function sendResponseWithHeaderAndStatus(res,contentType, statusCode, data){
    res.setHeader('Content-Type', contentType);
    res.statusCode = statusCode;
    res.end(JSON.stringify(data));
}

export function getDataByPathParams(data, locationType, locationName){
    return data.filter((item)=> item[locationType].toLowerCase() === locationName.toLowerCase());
}


export function getDataByQueryParams(data, queryParams){
    const {country, continent, is_open_to_public} = queryParams;
    if(country){
        data = data.filter(destination => destination.country.toLowerCase() === country.toLowerCase())
    }
    
    if(continent){
        data = data.filter(destination => destination.continent.toLowerCase() === continent.toLowerCase())
    }
    
    if(is_open_to_public){
        data = data.filter(destination => destination.is_open_to_public === is_open_to_public)
    }

    return data;

}

export const JSON_MIME = "application/json";
export const HTTP_OK = 200;
export const HTTP_NOT_FOUND = 404;