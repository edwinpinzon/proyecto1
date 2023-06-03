import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import HowToRegIcon from '@mui/icons-material/HowToReg';


export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
      <button onClick={loginWithRedirect}>
        <HowToRegIcon />
      </button>
    );
  };