import axios from 'axios'
import {baseURL} from './Constants/Constants'

//Creating Axios Instance
const instance = axios.create({
    baseURL: baseURL
  });

export default instance