import axios from "axios";
import { apiUrls } from "../../utils/api-constants";

export default function apiClient() {
  const instance = axios.create({
    baseURL: apiUrls.baseUrl,
  });
  return instance;
}
