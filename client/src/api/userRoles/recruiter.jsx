import axios from "axios";
import url from "@/src/utils/api_url";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Recruiter = async ({
  profileName,
  web,
  location,
  phone,
  companyName,
  position,
  industry,
  setLoading,
  setError,
  setErrorMessage,
  navigation,
} = {}) => {
  setLoading(true);
  const userid = Number(await AsyncStorage.getItem("UsersID"))
  const recruiterDetails = {
    ID: userid,
    Image: "https://i.pinimg.com/736x/af/1e/ad/af1eadda2a09a84bafec903eaf7e50fd.jpg",
    Full_Name: profileName,
    Website_or_Portfolio: web,
    Location: location,
    Phone: phone,
    Company_Name: companyName,
    Position: position,
    Industry: industry,
  };
  try {
    const response = await axios.post(
      `${url}accounts/recruiter_profile/`,
      recruiterDetails,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("Data from user: ", response.data)
  } catch (err) {
    console.log("Error: ", err?.response?.data)
  } finally {
    setLoading(false)
  }
};

export default Recruiter;
