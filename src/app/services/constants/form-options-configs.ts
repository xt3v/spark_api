import { environment } from 'src/environments/environment';

const endpoint = environment.APIEndpoint;
const endpointV1 = environment.APIv1Endpoint;

const parses:any = {
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data",
    ]
}

const renders: any = {
    "renders": [
        "application/json",
        "text/html"
    ],
}

export {
    parses, renders, endpoint, endpointV1
}