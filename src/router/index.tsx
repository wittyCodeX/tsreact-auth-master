import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouter from "./Public";
import PrivateRouter from "./Private";

import Login from "../pages/Login";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    isPublic: false,
    element: Home,
  },
  {
    path: "/login",
    isPublic: true,
    element: Login,
  },
];

const Index: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={
              route.isPublic ? (
                <PublicRouter {...route} key={key} />
              ) : (
                <PrivateRouter {...route} key={key} />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
