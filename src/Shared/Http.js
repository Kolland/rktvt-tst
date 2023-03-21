import { API_URL } from "./env";

export default class ApiGateway {
  static async get(path) {
    const response = await fetch(`${API_URL}${path}`);

    return response.json();
  }

  static async post(path, payload) {
    const response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    return response.json();
  }
}
