import { useParams } from "next/navigation";

export default function ItemDetailsPage() {
  const params = useParams();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Item Details for ID: {params.id}</h1>
      <p className="mt-4">Here you can show the full item description, price, and image.</p>
    </div>
  );
}
