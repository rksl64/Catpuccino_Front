import axios from "axios";
import authHeader from "./auth-header";

const BASE_HOST = "http://localhost:8080";

export async function getProductos() {
  try {
    const response = await axios.get(`${BASE_HOST}/User/producto`, {
      headers: authHeader(),
    });
    console.log("user", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
