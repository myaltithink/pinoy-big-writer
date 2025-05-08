import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from "../utils/localstorage";
import type { User } from "../types";

const PrivateRoute = () => {
  const user = getLocalStorageItem<User>("user");

  return user && user.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
