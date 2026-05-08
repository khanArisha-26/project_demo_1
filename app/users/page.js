"use client";

import Link from "next/link";
import { useGetUsersQuery, useDeleteUserMutation } from "@/store/usersApi";
import { Button } from "@/components/ui/button";

export default function UsersPage() {
  const { data: apiUsers, isLoading, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Something went wrong while fetching users.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User List From API</h1>

        <Link href="/users/new">
          <Button>Add User</Button>
        </Link>
      </div>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3 text-left">ID</th>
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Email</th>
            <th className="border p-3 text-left">City</th>
            <th className="border p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {apiUsers.map((user) => (
            <tr key={user.id}>
              <td className="border p-3">{user.id}</td>
              <td className="border p-3">{user.name}</td>
              <td className="border p-3">{user.email}</td>
              <td className="border p-3">{user.address.city}</td>

              <td className="border p-3 flex gap-2">
                <Link href={`/users/edit/${user.id}`}>
                  <Button variant="outline">Edit</Button>
                </Link>

                <Button
                  variant="destructive"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}