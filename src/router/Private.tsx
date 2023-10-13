import React, { ReactElement } from "react";
import { Navigate, Route } from "react-router-dom";
import authToken from "../utils/authToken";

const Private: React.FC = ({ element: Element }: any): ReactElement => {
  if (authToken.get("user")) {
    return <Element />;
  }
  return <Navigate to="/login" />;
};

export default Private;
