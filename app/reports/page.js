import DataTable from "@/components/DataTable";

export default function ReportsPage() {
  const columns = ["ID", "Report Name", "Month", "Status"];

  const data = [
    { id: 1, report: "Sales Report", month: "January", status: "Completed" },
    { id: 2, report: "User Report", month: "February", status: "In Progress" },
    { id: 3, report: "Inventory Report", month: "March", status: "Pending" },
  ];

  return <DataTable title="Report List" columns={columns} data={data} />;
}