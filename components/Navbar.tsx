"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="font-bold text-xl">My App</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/items">Items</Link>
        <Link href="/login">Login</Link>
        <Link href="/add-item">Add Item</Link>
      </div>
    </nav>
  );
}
