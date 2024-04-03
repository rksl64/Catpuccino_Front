import { getToken } from "./Cookies/cookies";

export default function authHeader() {
  const token = getToken("token")

  if (token) {
    return {
      Authorization: "Bearer " + token,
    };
  } else {
    return {};
  }
}





