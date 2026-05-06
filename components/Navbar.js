import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex gap-6">
      <Link href="/" className="hover:text-gray-300">Home</Link>
      <Link href="/users" className="hover:text-gray-300">Users</Link>
      <Link href="/products" className="hover:text-gray-300">Products</Link>
      <Link href="/orders" className="hover:text-gray-300">Orders</Link>
      <Link href="/employees" className="hover:text-gray-300">Employees</Link>
      <Link href="/reports" className="hover:text-gray-300">Reports</Link>
    </nav>
  );
}