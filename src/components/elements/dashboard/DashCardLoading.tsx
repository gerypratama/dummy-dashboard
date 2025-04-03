import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LoaderIcon } from "lucide-react";

export default function DashCardLoading({ title }: { title: string }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          <LoaderIcon className="animate-spin" size={32} />
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <Skeleton className="w-20 h-4 bg-gray-600" />
        <Skeleton className="w-32 h-4 bg-gray-600" />
      </CardFooter>
    </Card>
  );
}
