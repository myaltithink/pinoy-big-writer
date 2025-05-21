import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { setLocalStorageItem } from "../utils/localstorage";
import { addUser, getUser, updateUser } from "../services/User";
import type { User } from "../types";
import { useAuthRedirect } from "../hooks/useAuthRedirect";
import bcrypt from "bcryptjs";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 'fa' stands for Font Awesome
import { Link } from "react-router-dom";

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
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

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
          const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
          );

          if (isPasswordCorrect) {
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
          if (password.length < 4) {
            setErrorMessage("Password must be at least 4 characters long.");
            return;
          }
          const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds

          const newUser: User = {
            username,
            password: hashedPassword, // store hashed password
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
          <div className="relative">
            <input
              className="border-6 bg-yellow-200 border-yellow-800 text-yellow-800 p-4 pr-12 rounded-xl text-2xl
              focus:outline-none focus:ring-2 focus:ring-yellow-800/25"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontFamily: "Arco" }}
            />
            <span
              className="absolute inset-y-0 right-0 pr-8 flex items-center cursor-pointer text-yellow-800 clear-start text-2xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
            </span>
          </div>
          <p className="text-white text-xs" style={{ fontFamily: "Arco" }}>
            Continuing means you accept our{" "}
            <Link
              to="/terms-and-conditions"
              className="underline text-yellow-800 border-b-2"
            >
              Terms and Conditions
            </Link>
          </p>
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
