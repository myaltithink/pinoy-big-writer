import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../utils/localstorage";
import { useUserStore } from "../stores/useUserStore";
import type { User } from "../types";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  useEffect(() => {
    const user = getLocalStorageItem<User>("user");
    if (user) {
      setUser(user);
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [navigate, setUser]);
};
