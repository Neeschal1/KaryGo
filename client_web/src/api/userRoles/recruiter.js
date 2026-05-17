import axios from "axios";
import url from "@/utils/api_url";
import { storage } from "@/utils/storage";

const Recruiter = async ({
  profileName,
  web,
  location,
  phone,
  companyName,
  position,
  industry,
  setLoading,
  navigate,
} = {}) => {
  setLoading(true);
  const userid = Number(storage.getItem("UsersID"));
  const recruiterDetails = {
    ID: userid,
    Image:
      "https://i.pinimg.com/736x/af/1e/ad/af1eadda2a09a84bafec903eaf7e50fd.jpg",
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
      { headers: { "Content-Type": "application/json" } },
    );

    if (response.status === 201) {
      storage.setItem("ProfileCompleted", "true");
      alert("Profile created successfully");
      navigate("/app", { replace: true });
    }
  } catch (err) {
    const data = err?.response?.data;
    const message =
      typeof data === "string"
        ? data
        : data?.detail || JSON.stringify(data || "Unknown error");
    alert(`Error: ${message}`);
  } finally {
    setLoading(false);
  }
};

export default Recruiter;
