import DataTable from "@/components/DataTable";

export default function EmployeesPage() {
  const columns = ["ID", "Name", "Department", "Position"];

  const data = [
    { id: 1, name: "Ayesha", department: "HR", position: "HR Officer" },
    { id: 2, name: "Bilal", department: "IT", position: "Developer" },
    { id: 3, name: "Hamza", department: "Sales", position: "Sales Executive" },
  ];

  return <DataTable title="Employee List" columns={columns} data={data} />;
}