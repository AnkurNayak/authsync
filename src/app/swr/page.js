"use client";
import { Card, CardLoader } from "@/components/swrComponents/CardsComponent";
import { SWRHeader } from "@/components/swrComponents/SWRHeader";
import useSWR from "swr";

const SWRComponentPage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/c/d583-9e78-49ad-98b4",
    fetcher
  );

  if (isLoading) {
    return (
      <div className="container mx-auto">
        <div className="p-4 sm:p-8">
          <SWRHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <CardLoader key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto">
        <div className="p-8">
          <SWRHeader />
          <div className="text-red-600">
            Failed to load data. Please try again.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col flex-auto p-4 sm:p-8">
        <SWRHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10">
          {data.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SWRComponentPage;
