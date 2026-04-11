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
      const res = await axios.post(
        `${url}/accounts/account_signup/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const returnMessage = res?.data?.Message
      console.log("Return Message: ", returnMessage)

      const userID = res?.data?.Message?.UserID
      console.log("\n\n\nUser's ID in integer: ", userID)
      const userIDstr = res?.data?.Message?.UserID
      console.log("\n\n\nUser's ID in string: ", String(userIDstr))
      await AsyncStorage.setItem("UsersID", String(userID))

      if (checked === true) {
        const accessJWT = res?.data?.Message?.Tokens?.accesstoken;
        const refreshJWT = res?.data?.Message?.Tokens?.refreshtoken;
        await AsyncStorage.setItem("accessJWTToken", accessJWT);
        await AsyncStorage.setItem("refreshJWTToken", refreshJWT);
        // navigation.navigate("Otp")
      } 
      navigation.navigate("Otp")

    
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
