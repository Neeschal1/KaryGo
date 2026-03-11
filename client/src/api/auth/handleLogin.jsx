import url from "../../utils/api_url";
import axios from "axios";

const HandleLogin = async ({
  email,
  password,
  setLoading,
  setError,
  setErrorMessage,
  navigation,
} = {}) => {
  
  const userDetails = {
    Email: email,
    Password: password,
  };

  try {
    setLoading(true);
    const res = await axios.post(`${url}accounts/login_account/`, userDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = res.data.Message;

    if (message == "Login successful :)") {
      navigation.navigate("Home");
    } else {
      setError(true);
      setErrorMessage(message);
      setLoading(false);
    }
  } catch (err) {
    console.log("Full error: ", err.response?.data?.Email?.[0] || err.message);
    if (err.response?.data?.Email?.[0] ||err.message == "Request failed with status code 400") {
      setError(true);
      setErrorMessage("Field cannot be empty.");
    } else {
      setError(true);
      setErrorMessage(err.response?.data?.Email?.[0] || err.message);
      setLoading(false);
    }
  } finally {
    setLoading(false);
  }
};

export default HandleLogin;