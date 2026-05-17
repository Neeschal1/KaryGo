import axios from "axios";
import url from "../../utils/api_url";
import { storage } from "../../utils/storage";

const HandleSignup = async ({
  fullName,
  email,
  username,
  password,
  confirmPassword,
  checked,
  setLoading,
  setError,
  setErrorMessage,
  navigate,
} = {}) => {
  const data = {
    first_name: fullName,
    username,
    email,
    password,
  };

  if (password !== confirmPassword) {
    setErrorMessage(
      "Your password and confirm password doesnot matches. Check them and try again!",
    );
    setError(true);
    return;
  }

  setLoading(true);
  try {
    const res = await axios.post(`${url}accounts/account_signup/`, data, {
      headers: { "Content-Type": "application/json" },
    });

    if (checked === true) {
      const accessJWT = res?.data?.Message?.Tokens?.accesstoken;
      const refreshJWT = res?.data?.Message?.Tokens?.refreshtoken;
      if (accessJWT) storage.setItem("accessJWTToken", accessJWT);
      if (refreshJWT) storage.setItem("refreshJWTToken", refreshJWT);
    }
    navigate("/otp");
  } catch (err) {
    console.log("Error occured: ", err.response?.data);
  } finally {
    setLoading(false);
  }
};

export default HandleSignup;
