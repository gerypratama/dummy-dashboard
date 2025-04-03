import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { RotateCw } from "lucide-react";

export default function DashCardError({
  title,
  refetch,
}: {
  title: string;
  refetch: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-xs">Something went wrong</p>
          <p className="text-muted-foreground text-xs">
            Click the refresh button
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => refetch()}
          size="icon"
        >
          <RotateCw />
        </Button>
      </CardFooter>
    </Card>
  );
}
