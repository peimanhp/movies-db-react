import axios from "axios";
import config from "./config.json";


const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTgxZGVkMTg2NGM3MjM1ZmQ1YzM5NGU3N2Q3OTIxOCIsInN1YiI6IjY0YjNiNDhlNzg1NzBlMDExZGE5NmExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nG2SAXfEeIoFLfPWeJDj8iwZSaOBbjNIn_glSeaKt7g";

const authAxios = axios.create({
  baseURL: config.apiEndpoint,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const http = {
  get: authAxios.get,
  post: authAxios.post,
  put: authAxios.put,
  delete: authAxios.delete,   
};
export default http;