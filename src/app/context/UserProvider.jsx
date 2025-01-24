'use client';

import { createContext, useContext, useState } from "react";

const userContext = createContext(null);

export const UserData = () => useContext(userContext);

const UserProvider = ({ children, initialUser, isAuthenticatd }) => {
    const [user, setUser] = useState(initialUser || null)
    
    const [isAuth,setIsAuth] = useState(isAuthenticatd || null)
    return (
        <userContext.Provider value={{user,isAuth,setIsAuth,setUser}}>
            {children}
      </userContext.Provider>
    );
};

export default UserProvider;