import axios from "axios";
import url from "@/src/utils/api_url";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const Recruiter = async ({
  profileName,
  web,
  location,
  phone,
  companyName,
  position,
  industry,
  setLoading,
  navigation,
} = {}) => {
  setLoading(true);
  const userid = Number(await AsyncStorage.getItem("UsersID"));
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

    if (response.status === 201) {
      AsyncStorage.setItem("ProfileCompleted", true);
      Alert.alert("Success", "Profile created successfully", [
        {
          text: "OK",
          onPress: () =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "TabNavigation" }],
              }),
            ),
        },
      ]);
    }

    console.log("Data from user: ", response.data);
  } catch (err) {
    console.log("Full error:", err);

    const data = err?.response?.data;

    const message =
      typeof data === "string"
        ? data
        : data?.detail || JSON.stringify(data || "Unknown error");

    Alert.alert("Error", message);
  } finally {
    setLoading(false);
  }
};

export default Recruiter;
