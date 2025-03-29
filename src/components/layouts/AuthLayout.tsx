import { SidebarProvider } from "@/components/ui/sidebar";
import { axiosInstance } from "@/lib/axios";
import { userState } from "@/states/auth";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { LoaderIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import AppSidebar from "../elements/AppSidebar";
import Header from "../elements/Header";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [, setUser] = useAtom(userState);
  const router = useRouter();
  const { data, isLoading, error } = useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      return await axiosInstance("auth/me").then((res) => res.data);
    },
  });

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <LoaderIcon className="animate-spin" size={48} />
      </div>
    );
  }

  if (error) {
    toast.message("Something went wrong", {
      description: "Please log back in",
    });
    Cookies.remove("accessToken");
    router.invalidate();
  }

  if (data) {
    // console.log(data);
    setUser(data);
  }

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
