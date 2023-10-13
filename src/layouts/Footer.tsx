import React, { ReactElement } from "react";

const Footer: React.FC = (): ReactElement => {
  return (
    <div className="text-center py-6">
      Copyright @ {new Date().getFullYear()} by Me!
    </div>
  );
};

export default Footer;
