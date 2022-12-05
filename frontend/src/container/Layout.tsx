import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <main className="main">{children}</main>
  );
};
