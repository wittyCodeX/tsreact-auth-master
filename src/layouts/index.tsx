import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Index: React.FC = ({ children }: any): ReactElement => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
