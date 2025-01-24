"use client";
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";

export const AuthProvider = ({children}) => {
    return <KindeProvider>
        {children}
    </KindeProvider>;
    // authentication done completely
};


export default AuthProvider;