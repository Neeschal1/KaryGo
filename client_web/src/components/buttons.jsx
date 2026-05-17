import { useNavigate } from "react-router-dom";

const routeMap = {
  Splash: "/splash",
  Welcome: "/welcome",
  Login: "/login",
  Signup: "/signup",
  Otp: "/otp",
  ChooseRole: "/choose-role",
  RecruiterProfile: "/recruiter-profile",
  SeekerProfile: "/seeker-profile",
  TabNavigation: "/app",
  Resume: "/resume",
  Profile: "/profile",
};

const resolvePath = (screen) => routeMap[screen] || screen;

export const PrimaryButton = ({
  text,
  loading,
  navigatingScreen,
  Press,
  parameters,
}) => {
  const navigate = useNavigate();

  const handleButtonPress = () => {
    if (Press) {
      Press(parameters);
    } else if (navigatingScreen) {
      navigate(resolvePath(navigatingScreen));
    }
  };

  return (
    <button
      type="button"
      className={`${loading ? "bg-primaryloading" : "bg-primary"} rounded-button w-full items-center border-0 cursor-pointer disabled:cursor-not-allowed`}
      onClick={handleButtonPress}
      disabled={loading}
    >
      {loading ? (
        <div className="py-5 flex justify-center">
          <span className="inline-block w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <span className="font-Quicksandbold text-lighttext text-subheading py-5 px-5 block">
          {text}
        </span>
      )}
    </button>
  );
};

export const SecondaryButton = ({ text, navigatingScreen }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="border border-primary rounded-button w-full items-center bg-transparent cursor-pointer"
      onClick={() => navigate(resolvePath(navigatingScreen))}
    >
      <span className="font-Quicksandbold text-darktext text-subheading py-5 px-5 block">
        {text}
      </span>
    </button>
  );
};

export const TextualButtonPrimary = ({ text, navigatingScreen }) => {
  const navigate = useNavigate();
  if (!navigatingScreen?.trim()) {
    return (
      <span className="font-Quicksandbold text-primary text-description">
        {text}
      </span>
    );
  }
  return (
    <button
      type="button"
      className="bg-transparent border-0 cursor-pointer font-Quicksandbold text-primary text-description"
      onClick={() => navigate(resolvePath(navigatingScreen))}
    >
      {text}
    </button>
  );
};

export const TextualButtonSecondary = ({ text, navigatingScreen }) => {
  const navigate = useNavigate();
  if (!navigatingScreen?.trim()) {
    return (
      <span className="font-Quicksandbold text-secondary text-description">
        {text}
      </span>
    );
  }
  return (
    <button
      type="button"
      className="bg-transparent border-0 cursor-pointer font-Quicksandbold text-secondary text-description"
      onClick={() => navigate(resolvePath(navigatingScreen))}
    >
      {text}
    </button>
  );
};

export const ApplyButton = ({ text }) => (
  <button
    type="button"
    className="bg-primary rounded-button w-full items-center border-0 cursor-pointer"
  >
    <span className="font-Quicksandbold text-white text-subheading py-3 px-3 block">
      {text}
    </span>
  </button>
);
