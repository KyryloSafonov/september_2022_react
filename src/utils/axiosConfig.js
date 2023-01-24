import axios from "axios";
import { baseURL } from "../api/endpoints";

export const axiosRequest = axios.create({baseURL})
