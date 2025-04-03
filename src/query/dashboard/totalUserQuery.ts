import { axiosInstance } from "@/lib/axios";
import { queryOptions } from "@tanstack/react-query";

export default function totalUserQuery(key: string[], endpoint: string) {
  return queryOptions({
    queryKey: key,
    queryFn: async () => {
      return await axiosInstance(endpoint).then((res) => res.data);
    },
  });
}
