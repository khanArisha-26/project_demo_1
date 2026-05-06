import DataTable from "@/components/DataTable";

export default function UsersPage() {
  const columns = ["ID", "Name", "Email", "Role"];

  const data = [
    { id: 1, name: "Ali Khan", email: "ali@email.com", role: "Admin" },
    { id: 2, name: "Sara Ahmed", email: "sara@email.com", role: "User" },
    { id: 3, name: "Zeeshan Malik", email: "zeeshan@email.com", role: "Manager" },
  ];

  return <DataTable title="User List" columns={columns} data={data} />;
}