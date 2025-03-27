import React from "react";
import Header from "../elements/Header";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-800 w-full">
      <Header />
      <div className="p-4">{children}</div>
    </main>
  );
};
