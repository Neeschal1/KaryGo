import axios from "axios";
import url from "../../utils/api_url";
import JWTAuthorization from "../../utils/authorization";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  navigation,
} = {}) => {
  console.log("Button pressed from handlesignup");

  const data = {
    first_name: fullName,
    username: username,
    email: email,
    password: password,
  };

  if (password == confirmPassword) {
    setLoading(true);
    try {
      const res = await axios.post(`${url}
/accounts/account_signup/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Data: ", data)
      console.log("Response: ", res.data.Tokens)

      if (checked == true) {
        const accessToken = res.data?.Tokens?.accesstoken;
        const refreshToken = res.data?.Tokens?.refreshtoken;

        await AsyncStorage.setItem("accesstoken", accessToken)
        await AsyncStorage.setItem("refreshtoken", refreshToken)

      }
      console.log("Access Token: ", accessToken, "\nRefresh Token: ", refreshToken);

    } catch (err) {
      console.log("Error occured: ", err.response?.data);
    } finally {
      setLoading(false);
    }
  } else {
    setErrorMessage(
      "Your password and confirm password doesnot matches. Check them and try again!",
    );
    setError(true);
    console.log(
      "Your password and confirm password doesnot matches. Check them and try again!",
    );
  }
};

export default HandleSignup;


