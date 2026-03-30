import AsyncStorage from "@react-native-async-storage/async-storage";

const JWTAuthorization = async () => {
  const access = await AsyncStorage.getItem("accesstoken");

  if (access) {
    return {
      Authorization: `Bearer ${access}`,
      "Content-Type": "application/json",
    };
  } else {
    return null;
  }
};

export default JWTAuthorization;
