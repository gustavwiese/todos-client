import axios from "axios";
import Todo from "../models/todo";

class TodoService {
  http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  async getAll() {
    console.log(this.http.defaults.baseURL);
    const response = await this.http.get<Todo[]>("/todos");
    return response.data;
  }

  async delete(id: string) {
    await this.http.delete(`/todos/${id}`);
  }
}

export default new TodoService();
