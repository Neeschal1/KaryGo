import axios from "axios";
import url from "../../utils/api_url";

const HandleSignup = async ({
  fullName,
  email,
  username,
  password,
  confirmPassword,
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
    setLoading(true)
    try {
      const res = await axios.post(`${url}accounts/account_signup/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Details: ", res.data);
    } catch (err) {
      console.log(err);
    } finally {
        setLoading(false)
    }
  } else {
    setErrorMessage("Your password and confirm password doesnot matches. Check them and try again!")
    setError(true)
    console.log("Your password and confirm password doesnot matches. Check them and try again!")
  }
};

export default HandleSignup;
