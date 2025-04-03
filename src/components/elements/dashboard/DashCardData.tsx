import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import totalUserQuery from "@/query/dashboard/totalUserQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { TrendingUpIcon } from "lucide-react";

export default function DashCardData({
  queryKey,
  endpoint,
  title,
}: {
  queryKey: string[];
  endpoint: string;
  title: string;
}) {
  const { data } = useSuspenseQuery(totalUserQuery(queryKey, endpoint));

  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {data.total}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Trending up this month <TrendingUpIcon className="size-4" />
        </div>
        <div className="text-muted-foreground">
          Visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
