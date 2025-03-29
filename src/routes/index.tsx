import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { AxiosError, type AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

interface ILoginError extends AxiosError {
  response?: AxiosResponse<{ message: string }>;
}

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const isAuth = !!Cookies.get("accessToken");
    if (isAuth) {
      throw redirect({
        to: "/dashboard",
        search: location.href,
      });
    }
  },
  component: App,
});

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = Route.useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post("auth/login", {
        username: username,
        password: password,
      });
      return await res.data;
    },
    onSuccess: async (res) => {
      if (res.accessToken) {
        const { accessToken } = res;
        Cookies.set("accessToken", accessToken, { expires: 30, secure: true });
        toast.success("Login success");
        await navigate({ to: "/dashboard" });
      }
    },
    onError: (error: ILoginError) => {
      const errMsg = error.response?.data.message || "Login failed";
      toast.error(errMsg);
      setUsername("");
      setPassword("");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-80 rounded-sm">
        <CardHeader className="text-center">
          <CardTitle>DummyDash</CardTitle>
          <form onSubmit={handleSubmit}>
            <CardContent className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Username"
                  className="border-gray-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pt-3">
              <Button
                type="submit"
                className="hover:cursor-pointer"
                disabled={isPending}
              >
                Login
              </Button>
            </CardFooter>
          </form>
        </CardHeader>
      </Card>
    </div>
  );
}
