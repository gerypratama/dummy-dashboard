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
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const isAuth = sessionStorage.getItem("isAuth") === "true";
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
  const router = useRouter();
  const navigate = Route.useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        // credentials: "include", // Include cookies (e.g., accessToken) in the request
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      return await res.json();
    },
    onSuccess: async (res) => {
      if (res.accessToken) {
        sessionStorage.setItem("isAuth", "true");
        toast.success("Login success");
        router.invalidate();
        navigate({ to: "/dashboard" });
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
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
