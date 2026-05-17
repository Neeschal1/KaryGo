import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Splash from "@/pages/Splash";
import Welcome from "@/pages/Welcome";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Otp from "@/pages/Otp";
import ChooseRole from "@/pages/ChooseRole";
import RecruiterProfile from "@/pages/RecruiterProfile";
import SeekerProfile from "@/pages/SeekerProfile";
import Resume from "@/pages/Resume";
import Profile from "@/pages/Profile";
import Home from "@/pages/Home";
import AddJobs from "@/pages/AddJobs";
import Community from "@/pages/Community";
import Chats from "@/pages/Chats";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/splash" replace />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/choose-role" element={<ChooseRole />} />
      <Route path="/recruiter-profile" element={<RecruiterProfile />} />
      <Route path="/seeker-profile" element={<SeekerProfile />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/app" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<AddJobs />} />
        <Route path="community" element={<Community />} />
        <Route path="chats" element={<Chats />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/splash" replace />} />
    </Routes>
  );
}
