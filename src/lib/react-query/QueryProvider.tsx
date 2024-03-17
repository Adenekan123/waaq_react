import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const client = new QueryClient();

const QueryProvider = ({ children }: Props) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
