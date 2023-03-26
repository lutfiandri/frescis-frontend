import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // user -> {displayName: string, email: string, photoURL: string}
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
