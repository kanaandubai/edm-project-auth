// components/DataTable.tsx
import React, { useEffect, useState } from 'react';
import '../styles/dataTable.scss'; // Correct relative import path
interface DataItem {
  id: number;
  username: string;
  email: string;
  name: {firstname:string,lastname:string};
  phone: string;
}

interface DataTableProps {
  users: string;
}

const DataTable: React.FC<DataTableProps> = ({ users }) => {
  const [tableData, setTableData] = useState<DataItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from API based on user role (Simulated data for demonstration purposes)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/users`);
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [users]);


  // Filter table data based on search term
  const filteredData = tableData.filter((item) =>
  Object.values(item).some((value) =>
    value && typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
  )
);

  return (
    <div className="data-table-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="data-table">
        <thead>
          <tr>
            {/* Render table headers */}
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.name.firstname} {item.name.lastname}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
