export default function DataTable({ title, columns, data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th key={column} className="border p-3 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {Object.values(row).map((value, valueIndex) => (
                <td key={valueIndex} className="border p-3">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}