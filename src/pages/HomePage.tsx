import { useState } from "react";
import FormElement from "../components/formElement/FormElement"
import TableData from "../components/tables/TableData"

interface Employee {
  employeeId: string;
  name: string;
  salary: string;
}

const HomePage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  
  const handleAddEmployee = (newEmployee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  }; 

  return (
    <div className='text-black shadow-gray-50 text-4xl text-left'>
        <h2 className=' text-center py-5'>Crud App</h2>
        <div className=' flex justify-center gap-10'>
        <div>
            <FormElement onAddEmployee={handleAddEmployee} />
        </div>
        <div>
            <TableData employee={employees} />
        </div>
        </div>
    </div>
  )
}

export default HomePage
