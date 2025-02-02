const TableData = () => {
    return (
        <table className="min-w-full table-auto border-separate border-spacing-0 border text-xl mt-5">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border">Name</th>
            <th className="px-4 py-2 text-left border">Age</th>
            <th className="px-4 py-2 text-left border">Email</th>
            <th className="px-4 py-2 text-left border">Action</th>
          </tr>
        </thead>
        <tbody>
       
          <tr>
            <td className="px-4 py-2 border">John Doe</td>
            <td className="px-4 py-2 border">30</td>
            <td className="px-4 py-2 border">john@example.com</td>
            <td className="px-4 py-2 border flex gap-5">
                <button className="bg-green-600 shadow rounded py-1 px-2 hover:cursor-pointer">Edit</button>
                <button className="bg-red-600 shadow rounded py-1 px-2 hover:cursor-pointer">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">John Doe</td>
            <td className="px-4 py-2 border">30</td>
            <td className="px-4 py-2 border">john@example.com</td>
            <td className="px-4 py-2 border flex gap-5">
                <button className="bg-green-600 shadow rounded py-1 px-2 hover:cursor-pointer">Edit</button>
                <button className="bg-red-600 shadow rounded py-1 px-2 hover:cursor-pointer">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">John Doe</td>
            <td className="px-4 py-2 border">30</td>
            <td className="px-4 py-2 border">john@example.com</td>
            <td className="px-4 py-2 border flex gap-5">
                <button className="bg-green-600 shadow rounded py-1 px-2 hover:cursor-pointer">Edit</button>
                <button className="bg-red-600 shadow rounded py-1 px-2 hover:cursor-pointer">Delete</button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">John Doe</td>
            <td className="px-4 py-2 border">30</td>
            <td className="px-4 py-2 border">john@example.com</td>
            <td className="px-4 py-2 border flex gap-5">
                <button className="bg-green-600 shadow rounded py-1 px-2 hover:cursor-pointer">Edit</button>
                <button className="bg-red-600 shadow rounded py-1 px-2 hover:cursor-pointer">Delete</button>
            </td>
          </tr>
        
        </tbody>
      </table>
    );
}
 
export default TableData;