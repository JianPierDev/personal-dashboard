import { useState } from "react";
import { UserContext } from "./user-context";
import Me from "../assets/me.png";

const userObj = {
  name: "<Jian />",
  profession: "Software Developer",
  avatar: Me,
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userObj);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

