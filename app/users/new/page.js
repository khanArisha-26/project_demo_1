"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "@/components/UserContext";
import { Button } from "@/components/ui/button";

export default function AddUserPage() {
  const router = useRouter();
  const { addUser } = useUsers();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    addUser(formData);

    router.push("/users");
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>

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

        <Button type="submit">Save User</Button>
      </form>
    </div>
  );
}