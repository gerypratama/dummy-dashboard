import AddItemDialog from "@/components/elements/test/AddItemDialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import supabase from "@/config/supabaseClient";
import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_auth/test")({
  loader: async () => {
    const { data, error } = await supabase.from("smoothies").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },
  onError: (error) => {
    toast.error("Error fetching data: ", error);
  },
  errorComponent: ErrorComponent,
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <>
      <h1 className="text-xl text-gray-200 font-bold mb-2">Testing Page</h1>
      <div className="grid grid-cols-5 gap-4">
        {data.map((item) => (
          <Card key={item.id} className="col-span-1">
            <CardHeader className="object-contain">
              <img src="https://picsum.photos/200" alt="placeholder" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <h2>{item.title}</h2>
              <div className="flex items-center gap-2">
                <Star fill="#eab676" color="transparent" />
                <span>{item.rating}/10</span>
              </div>
            </CardContent>
          </Card>
        ))}
        <AddItemDialog />
      </div>
    </>
  );
}

function ErrorComponent() {
  return (
    <>
      <h1 className="text-xl text-gray-200 font-bold mb-2">Testing Page</h1>
      <p className="text-xl text-gray-200">Something went wrong!</p>
    </>
  );
}
