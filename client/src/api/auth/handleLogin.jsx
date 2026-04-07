import url from "../../utils/api_url";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    console.log(userDetails)
    setLoading(true);
    const res = await axios.post(`${url}accounts/account_login/`, userDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = res.data.Message;

    const accessJWT = res.data?.Tokens?.accesstoken
    const refreshJWT = res.data?.Tokens?.refreshtoken
    console.log("Access Token: ", accessJWT, "\nRefresh Token: ", refreshJWT)

    await AsyncStorage.setItem("accessJWTToken", accessJWT)
    await AsyncStorage.setItem("refreshJWTToken", refreshJWT)

    if (message == "Login successful :)") {
      navigation.navigate("TabNavigation");
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