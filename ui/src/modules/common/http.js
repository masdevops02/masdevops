import axios from "axios";

// eslint-disable-next-line
const baseUrl = API_URL;
export const CallService = () => axios.get(baseUrl);