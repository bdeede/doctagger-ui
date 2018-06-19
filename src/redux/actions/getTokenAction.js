import axios from "axios";
import base64 from "base-64";
import queryString from "query-string";
export const GET_TOKEN = 'GET_TOKEN';


const TOKEN_URL = "http://localhost:9080/oauth/token";

const data = {
  grant_type: 'password',
  client_id: 'docmanager-react-client',
  client_secret: 'Password1',
  username: 'admin.admin',
  password: 'Password1!'
};

const clientAuthorisationHeader = base64.encode(`${data.client_id}:${data.password}`);



export function getToken() {
  const request = axios.post(TOKEN_URL,
    queryString.stringify(data),{
      headers: {'Authorization' : `Basic ${clientAuthorisationHeader}`}
    }
  );
  return {
    type: GET_TOKEN,
    payload: request
  };
}
