import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider ({ children }) {
    const [Auth, setAuth] = React.useState(false);
    const [tokenNumber, setTokenNumber] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const Api = async () => {
        try {
            setLoading(true);
            let user = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
            let response = await fetch(`https://reqres.in/api/login`,{
                method: 'POST',
                body: JSON.stringify(user),
                headers : { "Content-Type" : "application/json" }
            });
            let result = await response.json();
            setAuth(true);
            setTokenNumber(result.token);
            console.log(result.token)
            setLoading(false);
            // return result.token;
        } catch (error) {
            console.log(error)
        }
    }

    const toggle = () => {
        setAuth(!Auth);
        setTokenNumber();
        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{Auth, loading, tokenNumber, Api, toggle}} >
            {children}
        </AuthContext.Provider>
    )
}