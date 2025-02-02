import Input from "./Input";
import SubmitBtn from "./SubmitBtn";

const FormElement = () => {
    return ( 
        <form className="flex flex-col flex-wrap w-full gap-5 mt-5 text-xl border p-5 rounded-xl">
            <Input
                placeholder="Employee ID"
                type="text"
                className="w-full"
                onChange={()=>console.log("test")}
            />
            <Input
                placeholder="Employee Name"
                type="text"
                className="w-full"
                onChange={()=>console.log("test")}
            />
            <Input 
                placeholder="Salary"
                type="text"
                className=" w-full p-0 m-0"
                onChange={()=>console.log("test") }
            />
            <SubmitBtn 
                text="Submit"
                onClick={()=> alert()}
            />
        </form>
     );
}
 
export default FormElement;