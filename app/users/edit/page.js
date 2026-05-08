"use client";

import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useUsers } from "@/components/UserContext";
import { Button } from "@/components/ui/button";

export default function EditUserPage() {
  const router = useRouter();
  const params = useParams();
  const { users, updateUser } = useUsers();

  const userId = Number(params.id);
  const user = users.find((singleUser) => singleUser.id === userId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "",
    },
  });

  function onSubmit(data) {
    updateUser(userId, data);
    router.push("/users");
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Enter name"
            className="w-full border p-3 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            placeholder="Enter email"
            className="w-full border p-3 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("role", { required: "Role is required" })}
            placeholder="Enter role"
            className="w-full border p-3 rounded"
          />
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <Button type="submit">Update User</Button>
      </form>
    </div>
  );
}