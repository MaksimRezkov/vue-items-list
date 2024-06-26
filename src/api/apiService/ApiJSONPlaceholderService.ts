import axios from "axios";

class ApiJSONPlaceholderService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  getItemsByPage<R>(queryParams: { limit: number; page: number }) {
    const { limit, page } = queryParams;
    return axios.get<R>(`${this.baseURL}/comments?_limit=${limit}&_page=${page}`);
  }
}

export const apiJSONPlaceholderService = new ApiJSONPlaceholderService();
