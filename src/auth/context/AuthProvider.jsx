import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = { logged: false };
const init=()=>{
    const name= JSON.parse(localStorage.getItem('name'));

    return {
        logged:!!name,
        name
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {},init)

    const login=(name='')=>{
        const action={type:types.login,payload:name}
        localStorage.setItem('name',JSON.stringify(name))
        dispatch(action)
    }

    const logout=()=>{
        const action={type:types.logout}
        localStorage.removeItem('name')
        dispatch(action)
    }

  return <AuthContext.Provider value={{...authState,login,logout }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
