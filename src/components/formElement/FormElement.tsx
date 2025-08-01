import { useState } from "react";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";

interface FormData {
    employeeId: string,
    employeeName: string,
    salary: string 
}
const FormElement = () => {
    const [formData, setFormData] = useState<FormData>({
        employeeId: "",
        employeeName: '',
        salary: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevFormData)=>({
            ...prevFormData, 
            [name]: value
        }))
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData(formData)
    }

    return ( 
        <form className="flex flex-col flex-wrap w-full gap-5 mt-5 text-xl border p-5 rounded-xl">
            <Input
                placeholder="Employee ID"
                type="text"
                className="w-full"
                name="employeeId"
                value={formData.employeeId}            
                onChange={handleChange}
            />
            <Input
                placeholder="Employee Name"
                type="text"
                className="w-full"
                name="employeeName"
                value={formData.employeeName}            
                onChange={handleChange}
            />
            <Input 
                placeholder="Salary"
                type="text"
                className=" w-full p-0 m-0"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
            />
            <SubmitBtn 
                text="Submit"
                onClick={handleSubmit}
            />
        </form>
     );
}
 
export default FormElement;