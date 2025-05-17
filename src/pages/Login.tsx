import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { setLocalStorageItem } from "../utils/localstorage";
import { addUser, getUser, updateUser } from "../services/User";
import type { User } from "../types";
import { useAuthRedirect } from "../hooks/useAuthRedirect";

const avatars = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
  "/avatars/avatar4.png",
  "/avatars/avatar5.png",
  "/avatars/avatar6.png",
];

function Login() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useAuthRedirect();

  const handleNext = async () => {
    setErrorMessage(null); // Clear any previous errors
    if (step === 1) {
      if (username.trim()) {
        setLoading(true);
        const existingUser = await getUser(username);
        setLoading(false);
        if (existingUser) {
          setIsExistingUser(true);
          setStep(3); // Go directly to password
        } else {
          setIsExistingUser(false);
          setStep(2); // Go to avatar selection
        }
      }
    } else if (step === 2 && selectedAvatar) {
      setStep(3); // Proceed to password after avatar selection for new users
    }
  };

  const handleFinish = async () => {
    setErrorMessage(null); // Clear any previous errors
    if (step === 3) {
      if (isExistingUser) {
        // Login existing user
        const existingUser = await getUser(username);
        if (existingUser && password) {
          // VERY INSECURE - FOR DEMO ONLY
          if (existingUser.password === password) {
            const loggedInUser = { ...existingUser, isLoggedIn: true };
            await updateUser(username, { isLoggedIn: true });
            setLocalStorageItem("user", loggedInUser);
            setUser(loggedInUser);
            navigate("/home");
          } else {
            setErrorMessage("Incorrect password");
          }
        } else {
          setErrorMessage("Please enter your password.");
        }
      } else {
        // Create new user
        if (selectedAvatar && username && password) {
          const newUser: User = {
            username,
            password, // Store hashed password in real app
            avatar: selectedAvatar,
            ranking: 0,
            points: 0,
            achievements: [],
            progress: {
              capitalization: [false, false, false],
              punctuation: [false, false, false],
              spelling: [false, false, false],
            },
            isLoggedIn: true,
          };
          await addUser(newUser);
          setLocalStorageItem("user", newUser);
          setUser(newUser);
          navigate("/home");
        } else {
          setErrorMessage("Please choose an avatar and enter a password.");
        }
      }
    }
  };

  return (
    <div className="w-dvw h-dvh p-4 flex items-center justify-center background">
      {step === 1 && (
        <div className="flex flex-col justify-center items-center gap-4">
          <h2
            className="mb-4 text-white font-medium text-5xl "
            style={{ fontFamily: "Arco" }}
          >
            Type your username
          </h2>
          <input
            className="border-6 bg-yellow-200 border-yellow-800 text-yellow-800 p-4 rounded-xl text-2xl
            focus:outline-none focus:ring-2 focus:ring-yellow-800/25 "
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
            style={{ fontFamily: "Arco" }}
          />
          {loading && (
            <p className="text-xl text-white" style={{ fontFamily: "Arco" }}>
              Finding your account...
            </p>
          )}
          {errorMessage && (
            <p
              className="text-[#FF6467] text-xl"
              style={{ fontFamily: "Arco" }}
            >
              {errorMessage}
            </p>
          )}
          <div className="mt-8">
            <button
              onClick={handleNext}
              className="bg-[#FF6467] text-white px-8 py-4 rounded-xl text-2xl border-6 border-black hover:scale-90"
              disabled={!username.trim() || loading}
              style={{ fontFamily: "Arco" }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col justify-center items-center gap-4">
          <h2
            className="mb-4 text-white font-medium text-5xl"
            style={{ fontFamily: "Arco" }}
          >
            Choose your avatar
          </h2>
          <div className="grid grid-cols-3 gap-4 justify-center items-center">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}
                alt="avatar"
                className={`w-[10dvw] h-[10dvw] rounded-full cursor-pointer border-6 ${
                  selectedAvatar === avatar
                    ? "border-yellow-800"
                    : "border-yellow-300"
                }`}
                onClick={() => setSelectedAvatar(avatar)}
              />
            ))}
          </div>
          {errorMessage && (
            <p
              className="text-[#FF6467] text-xl"
              style={{ fontFamily: "Arco" }}
            >
              {errorMessage}
            </p>
          )}
          <div className="mt-8">
            <button
              onClick={handleNext}
              className="bg-[#FF6467] text-white px-8 py-4 rounded-xl border-6 border-black text-2xl hover:scale-90"
              disabled={!selectedAvatar}
              style={{ fontFamily: "Arco" }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col justify-center items-center gap-4">
          <h2
            className="mb-4 text-white font-medium text-5xl"
            style={{ fontFamily: "Arco" }}
          >
            {isExistingUser ? "Enter your password" : "Choose a password"}
          </h2>
          <input
            className="border-6 bg-yellow-200 border-yellow-800 text-yellow-800 p-4 rounded-xl text-2xl
            focus:outline-none focus:ring-2 focus:ring-yellow-800/25 "
            type={isExistingUser ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontFamily: "Arco" }}
          />
          {errorMessage && (
            <p
              className="text-[#FF6467] text-xl"
              style={{ fontFamily: "Arco" }}
            >
              {errorMessage}
            </p>
          )}
          <div className="mt-8">
            <button
              onClick={handleFinish}
              className="bg-[#05DF72] text-white px-8 py-4 rounded-xl border-6 border-black text-2xl hover:scale-90"
              disabled={!password}
              style={{ fontFamily: "Arco" }}
            >
              {isExistingUser ? "Login" : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
