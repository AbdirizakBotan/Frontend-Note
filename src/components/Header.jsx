import { Link } from "react-router-dom"
function Header(){
    return <div>
    <div className="flex items-center text-white font-semibold justify-between p-5 bg-blue-500">
        <Link to="/"><h1 className="text-5xl">Nooty</h1></Link>
        <Link to="/addnote"><i class="fa-solid font-bold text-5xl fa-plus"></i></Link>
    </div>
    
    </div>
}
export default Header