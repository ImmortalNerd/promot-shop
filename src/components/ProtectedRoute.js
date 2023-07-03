import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(()=>{
    if (!isAuthenticated) loginWithRedirect();
    }
    ,[isAuthenticated])
  return children;
}