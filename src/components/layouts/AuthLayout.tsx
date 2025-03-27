import React from "react";
import Header from "../elements/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../elements/AppSidebar";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-gray-800 w-full">
        <Header />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
};
