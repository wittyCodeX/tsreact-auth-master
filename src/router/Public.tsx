import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import authToken from "../utils/authToken";

const Public: React.FC = ({ element: Element }: any): ReactElement => {
  if (authToken.get("user")) {
    return <Navigate to="/" />;
  }
  return <Element />;
};

export default Public;
