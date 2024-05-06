import axios from "axios";

class ApiJSONPlaceholderService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  getCommentsByPage<R>(queryParams: { limit: number; page: number }) {
    const { limit, page } = queryParams;
    return axios.get<R>(`${this.baseURL}/posts?_limit=${limit}&_page=${page}`);
  }
}

export const apiJSONPlaceholderService = new ApiJSONPlaceholderService();
