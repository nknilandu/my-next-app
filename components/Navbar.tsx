"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <div className="flex gap-4">
        <Link href="/items">Items</Link>
        <Link href="/login">Login</Link>
        <Link href="/add-item">Add Item</Link>
      </div>
    </nav>
  );
}
