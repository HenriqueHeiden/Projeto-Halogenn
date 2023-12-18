'use client'
import { Categories } from "@/components/Categories";
import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Categories />
        <ProductList />
      </QueryClientProvider>
    </div>
  );
}
