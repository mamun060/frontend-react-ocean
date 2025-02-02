import './App.css'
import FormElement from './components/formElement/FormElement'
import Layouts from './components/layouts/Layouts'
import TableData from './components/tables/TableData'

function App() {
  return (
    <Layouts>
        <div className='text-white shadow-gray-50 text-4xl text-left'>
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
    </Layouts>
  )
}

export default App
