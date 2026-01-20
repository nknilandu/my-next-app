interface ItemCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function ItemCard({ name, description, price }: ItemCardProps) {
  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      <p className="font-semibold">${price}</p>
    </div>
  );
}
