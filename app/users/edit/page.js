"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useUsers } from "@/components/UserContext";
import { Button } from "@/components/ui/button";

export default function EditUserPage() {
  const router = useRouter();
  const params = useParams();
  const { users, updateUser } = useUsers();

  const userId = Number(params.id);
  const user = users.find((singleUser) => singleUser.id === userId);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    updateUser(userId, formData);

    router.push("/users");
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="role"
          placeholder="Enter role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <Button type="submit">Update User</Button>
      </form>
    </div>
  );
}