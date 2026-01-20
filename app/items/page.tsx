import ItemCard from "@/components/ItemCard";

const sampleItems = [
  { id: 1, name: "Item 1", description: "Description 1", price: 100 },
  { id: 2, name: "Item 2", description: "Description 2", price: 200 },
  { id: 3, name: "Item 3", description: "Description 3", price: 300 },
];

export default function ItemsPage() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleItems.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}
