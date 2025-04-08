import { URLS } from "@/constants/apiUrls";
import { PATHS } from "@/constants/paths";
import { apiCall } from "@/services/apiCall";
import { jwtDecode } from "jwt-decode";
import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const login = async (body) => {
    const { password, email} = body;
    const trimmedPassword = password.trimEnd();
    const trimmedUsername = email ? email.trim() : undefined;
    const trimmedBody = {
        password: trimmedPassword,
        email: trimmedUsername,
    };
    const response = await apiCall("post", URLS.LOGIN, trimmedBody);
    const { refreshToken, accessToken } = response?.message?.data?.token;

    if (accessToken && refreshToken) {
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        const decodedUser = jwtDecode(accessToken);
        setuser(decodedUser);
    }

    return response?.message?.data;
};




  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href(PATHS.LOGIN);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
