import axios from "axios";

const ROOT_URL = "http://localhost:9080/aws";


export function doGet(accessToken, requestPath){
    const AuthStr = `Bearer ${accessToken}`;
    const url = `${ROOT_URL}${requestPath}`;
    return axios.get(url, { headers: { Authorization: AuthStr } });
}

export function doDelete(accessToken, requestPath){
    const AuthStr = `Bearer ${accessToken}`;
    const url = `${ROOT_URL}${requestPath}`;
    return axios.delete(url, { headers: { Authorization: AuthStr } });
}

export function doPost(accessToken, requestPath, data, callBack){
    const AuthStr = `Bearer ${accessToken}`;
    const url = `${ROOT_URL}${requestPath}`;
    return axios.post(url, data, { headers: { Authorization: AuthStr } }).then(() => callBack());
}

export function doPostWithoutCallBack(accessToken, requestPath, data){
    const AuthStr = `Bearer ${accessToken}`;
    const url = `${ROOT_URL}${requestPath}`;
    return axios.post(url, data, { headers: { Authorization: AuthStr } });
}


export function doPostFile(accessToken, requestPath, values, callBack){
    const AuthStr = `Bearer ${accessToken}`;
    const url = `${ROOT_URL}${requestPath}`;
    let data = new FormData();
    values.files.map((file) => {
        data.append('files', file, file.Name);
    })

    return axios.post(url, data, { headers: { Authorization: AuthStr}}).then(() => callBack());
}