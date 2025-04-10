import UserMgmtLayout from "@/components/layouts/UserMgmtLayout";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <UserMgmtLayout>
      <form onSubmit={() => alert("Register success")}>
        <CardContent className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="border-gray-500"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Username"
              className="border-gray-500"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
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
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 pt-3">
          <Button
            type="submit"
            className="hover:cursor-pointer"
            // disabled={isPending}
          >
            Register
          </Button>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-indigo-400 hover:text-indigo-500 hover:cursor-pointer transition-colors duration-150"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </UserMgmtLayout>
  );
}
