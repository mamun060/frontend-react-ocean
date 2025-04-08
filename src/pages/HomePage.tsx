import FormElement from "../components/formElement/FormElement"
import TableData from "../components/tables/TableData"

function HomePage() {
  return (
    <div className='text-black shadow-gray-50 text-4xl text-left'>
        <h2 className=' text-center py-5'>Crud App</h2>
        <div className=' flex justify-center gap-10'>
        <div>
            <FormElement />
        </div>
        <div>
            <TableData />
        </div>
        </div>
    </div>
  )
}

export default HomePage
