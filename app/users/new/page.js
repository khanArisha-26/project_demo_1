"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/usersSlice";
import { Button } from "@/components/ui/button";

export default function AddUserPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    dispatch(addUser(data));

    router.push("/users");
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Enter name"
            className="w-full border p-3 rounded"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Enter email"
            className="w-full border p-3 rounded"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("role", { required: "Role is required" })}
            placeholder="Enter role"
            className="w-full border p-3 rounded"
          />

          {errors.role && (
            <p className="text-red-500 text-sm">
              {errors.role.message}
            </p>
          )}
        </div>

        <Button type="submit">Save User</Button>
      </form>
    </div>
  );
}