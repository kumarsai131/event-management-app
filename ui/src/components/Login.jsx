import { useEffect } from "react";
import { loginAPI } from "../utils/apis";

export default function Login() {
  useEffect(() => {
    login();
  }, []);

  function login() {
    loginAPI()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return <h1>Login</h1>;
}
