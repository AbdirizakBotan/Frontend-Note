import {Routes , Route} from "react-router-dom"
import Form from "./components/Form"
import Home from "./pages/Home"
import UpdateNote from "./pages/UpdateNote"
function App(){
    return <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/addnote" element={<Form/>}/>
  <Route path="/updateNote/:id" element={<UpdateNote/>}/>
        </Routes>

}
export default App
