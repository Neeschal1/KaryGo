import url from "../../utils/api_url";
import { storage } from "../../utils/storage";
import axios from "axios";

const HandleLogin = async ({
  email,
  password,
  setLoading,
  setError,
  setErrorMessage,
  navigate,
} = {}) => {
  const userDetails = {
    Email: email,
    Password: password,
  };

  try {
    setLoading(true);
    const res = await axios.post(`${url}accounts/account_login/`, userDetails, {
      headers: { "Content-Type": "application/json" },
    });
    const message = res.data.Message;
    const accessJWT = res.data?.Tokens?.accesstoken;
    const refreshJWT = res.data?.Tokens?.refreshtoken;

    if (accessJWT) storage.setItem("accessJWTToken", accessJWT);
    if (refreshJWT) storage.setItem("refreshJWTToken", refreshJWT);

    if (message === "Login successful :)") {
      navigate("/app");
    } else {
      setError(true);
      setErrorMessage(message);
    }
  } catch (err) {
    if (
      err.response?.data?.Email?.[0] ||
      err.message === "Request failed with status code 400"
    ) {
      setError(true);
      setErrorMessage("Field cannot be empty.");
    } else {
      setError(true);
      setErrorMessage(err.response?.data?.Email?.[0] || err.message);
    }
  } finally {
    setLoading(false);
  }
};

export default HandleLogin;
