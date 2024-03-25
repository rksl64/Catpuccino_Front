import React from "react";

export default function authHeader() {
  const { loginData} = AppConsumerHook();

  if (loginData && loginData.token) {
    return {
      Authorization: "Bearer " + loginData.token,
    };
  } else {
    return {};
  }
}





