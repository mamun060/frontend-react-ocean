interface Employee {
    employeeId: string;
    name: string;
    salary: string;
} 

interface TableComponentProps {
    employee: Employee[];
} 

const TableData: React.FC<TableComponentProps> = ({ employee }) => {
    return (
        <table className="min-w-full table-auto border-separate border-spacing-0 border text-xl mt-5">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border">EmployeeID</th>
            <th className="px-4 py-2 text-left border">Name</th>
            <th className="px-4 py-2 text-left border">Email</th>
            <th className="px-4 py-2 text-left border">Action</th>
          </tr>
        </thead>
        <tbody>
        {
          employee.map((emp, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{emp.employeeId}</td>
              <td className="px-4 py-2 border">{emp.name}</td>
              <td className="px-4 py-2 border">{emp.salary}</td>
              <td className="px-4 py-2 border flex gap-5">
                <button className="bg-green-600 shadow rounded py-1 px-2 hover:cursor-pointer">Edit</button>
                <button className="bg-red-600 shadow rounded py-1 px-2 hover:cursor-pointer">Delete</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    );
}
 
export default TableData;