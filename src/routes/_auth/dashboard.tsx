import DashboardCard from "@/components/elements/dashboard/DashboardCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const cardItems = [
    {
      queryKey: ["total-user"],
      title: "Total User",
      endpoint: "users?limit=1",
    },
    {
      queryKey: ["total-product"],
      title: "Total Product",
      endpoint: "products?limit=1",
    },
    {
      queryKey: ["total-cart"],
      title: "Total Cart",
      endpoint: "carts?limit=1",
    },
  ];
  return (
    <>
      <h1 className="text-xl text-gray-200 font-bold mb-2">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {cardItems.map((item) => (
          <DashboardCard
            queryKey={item.queryKey}
            title={item.title}
            endpoint={item.endpoint}
          />
        ))}
      </div>
    </>
  );
}
