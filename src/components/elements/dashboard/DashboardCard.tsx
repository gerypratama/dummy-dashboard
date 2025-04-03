import ErrorBoundary from "@/components/elements/ErrorBoundary";
import DashCardError from "./DashCardError";
import { useQueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import DashCardLoading from "./DashCardLoading";
import DashCardData from "./DashCardData";

export default function DashboardCard({
  queryKey,
  title,
  endpoint,
}: {
  queryKey: string[];
  title: string;
  endpoint: string;
}) {
  const queryClient = useQueryClient();

  return (
    <ErrorBoundary
      fallback={({ error, reset }) => (
        <DashCardError
          title={title}
          refetch={() => {
            reset();
            queryClient.refetchQueries({ queryKey });
          }}
        />
      )}
    >
      <Suspense fallback={<DashCardLoading title={title} />}>
        <DashCardData title={title} queryKey={queryKey} endpoint={endpoint} />
      </Suspense>
    </ErrorBoundary>
  );
}
