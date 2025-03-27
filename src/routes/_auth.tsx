import { AuthLayout } from "@/components/layouts/AuthLayout";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const isAuth = !!Cookies.get("accessToken");
    if (!isAuth) {
      throw redirect({
        to: "/",
        search: location.href,
      });
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
