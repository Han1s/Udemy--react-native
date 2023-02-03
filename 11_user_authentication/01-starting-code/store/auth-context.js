import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({
    token: null,
    isAuthenticated: false,
    authenticate: () => {
    },
    logout: () => {
    }
});

const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState();

    const authenticate = (token) => {
        setAuthToken(token);
    };

    useEffect(() => {
    }, [authToken]);

    const logout = () => {
        setAuthToken(null);
    }

    return (
        <AuthContext.Provider value={{
            token: authToken,
            isAuthenticated: !!authToken,
            authenticate: authenticate,
            logout: logout
        }}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;