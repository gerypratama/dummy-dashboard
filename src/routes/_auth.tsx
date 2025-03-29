import { AuthLayout } from "@/components/layouts/AuthLayout";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async () => {
    if (!Cookies.get("accessToken")) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
