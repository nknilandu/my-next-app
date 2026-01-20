interface ItemCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function ItemCard({ id, name, description, price }: ItemCardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-xl">{name}</h2>
      <p>{description}</p>
      <p className="font-semibold mt-2">${price}</p>
    </div>
  );
}
