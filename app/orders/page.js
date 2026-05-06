import DataTable from "@/components/DataTable";

export default function OrdersPage() {
  const columns = ["Order ID", "Customer", "Product", "Status"];

  const data = [
    { orderId: "ORD-101", customer: "Ali Khan", product: "Laptop", status: "Delivered" },
    { orderId: "ORD-102", customer: "Sara Ahmed", product: "Mouse", status: "Pending" },
    { orderId: "ORD-103", customer: "Hina Noor", product: "Keyboard", status: "Shipped" },
  ];

  return <DataTable title="Order List" columns={columns} data={data} />;
}