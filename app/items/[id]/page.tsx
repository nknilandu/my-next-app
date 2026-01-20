"use client"; // <-- add this at the very top

import { useParams } from "next/navigation";

export default function ItemDetailsPage() {
  const params = useParams();
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Item Details - ID: {params.id}</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Here you can show the full item description, price, and image for item {params.id}.
      </p>
    </div>
  );
}
