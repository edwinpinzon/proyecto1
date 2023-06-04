import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginIcon from '@mui/icons-material/Login';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
      <button onClick={loginWithRedirect}>
        <LoginIcon />
      </button>
    );
  };