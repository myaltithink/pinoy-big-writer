import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { setLocalStorageItem } from "../utils/localstorage";
import { addUser } from "../services/User";
import type { User } from "../types";

const avatars = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
  "/avatars/avatar4.png",
  "/avatars/avatar5.png",
  "/avatars/avatar6.png",
];

function Login() {
  const [step, setStep] = useState<1 | 2>(1);
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const handleNext = () => {
    if (username.trim()) setStep(2);
  };

  const handleFinish = () => {
    if (!selectedAvatar) return;
    const newUser: User = {
      username,
      avatar: selectedAvatar,
      ranking: 0,
      points: 0,
      achievements: [],
      isLoggedIn: true,
    };
    addUser(newUser);
    setLocalStorageItem("user", newUser);
    setUser(newUser);
    navigate("/home");
  };

  return (
    <div className="w-screen h-screen p-4 flex items-center justify-center stripes">
      {step === 1 && (
        <div className="flex flex-col justify-center items-center ">
          <h2 className="mb-4 text-amber-600 font-medium text-5xl">
            Create your profile
          </h2>
          <input
            className="border-2 bg-yellow-200 border-yellow-800 text-yellow-800 p-4 rounded-xl text-2xl"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="mt-8">
            <button
              onClick={handleNext}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-2xl hover:scale-90"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-4 text-amber-600 font-medium text-5xl">
            Choose your avatar
          </h2>
          <div className="grid grid-cols-3 gap-4 justify-center items-center">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}
                alt="avatar"
                className={`w-32 h-32 rounded-full cursor-pointer border-4 ${
                  selectedAvatar === avatar
                    ? "border-yellow-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedAvatar(avatar)}
              />
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={handleFinish}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-2xl hover:scale-90"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
