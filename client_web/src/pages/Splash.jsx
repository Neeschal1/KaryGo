import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "@/utils/storage";
import splashLogo from "@/assets/images/splashLogo.png";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const accessTokenJWT = storage.getItem("accessJWTToken");
      if (accessTokenJWT) {
        navigate("/app", { replace: true });
      } else {
        navigate("/welcome", { replace: true });
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-1 flex bg-primary min-h-screen">
      <div className="flex bg-splashBackground flex-1 w-full min-h-screen justify-center items-center">
        <img src={splashLogo} alt="KaryGo" className="max-w-[200px]" />
      </div>
    </div>
  );
}
