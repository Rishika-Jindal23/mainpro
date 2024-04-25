"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ClientProviderProps {
    children: ReactNode;
}

const queryClient = new QueryClient();
const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ClientProvider;
