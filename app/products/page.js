import DataTable from "@/components/DataTable";

export default function ProductsPage() {
  const columns = ["ID", "Product", "Category", "Price"];

  const data = [
    { id: 1, product: "Laptop", category: "Electronics", price: "Rs. 150,000" },
    { id: 2, product: "Mouse", category: "Accessories", price: "Rs. 2,500" },
    { id: 3, product: "Keyboard", category: "Accessories", price: "Rs. 6,000" },
  ];

  return <DataTable title="Product List" columns={columns} data={data} />;
}