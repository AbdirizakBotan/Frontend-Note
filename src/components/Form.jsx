import { useState } from "react"
import Header from "./Header"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Form(){
  const [title, setTitle] = useState("")
  const [description ,setDescription] = useState("")
  const [color , setColor] =useState("")
 const navigate = useNavigate()
  const handleRegisterNote = (e)=>{
    e.preventDefault()
    axios.post("http:localhost:5000/register",{
        "title": title,
        "description":description,
        "color": color
    }).then((res)=>{
        toast("Note Registered SuccessFully Saved",{
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            onClose:() => navigate("/")
        })
        // console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })
  }
 return <div>
    <Header/>
    <h1 className="text-center text-5xl mb-4 text-blue-500 mt-8">Add note</h1>
    <div>

    <form className="sm:ml-[30em]  ml-2 border-white shadow-xl shadow-gray-300 bg-blue-500 border-4 p-5 rounded-[12px] h-[380px] w-[350px] sm:w-[400px]">
        <label className="text-3xl font-thin  text-white ">Enter Title</label><br></br>
        <input value={title} onChange={(titles)=> setTitle(titles.target.value)} className="sm:w-[350px] w-[300px]  mb-2 p-3 outline-none rounded" type="text" placeholder="Enter title......." /><br></br>
        <label className="text-2xl font-thin text-white">Enter Description</label><br></br>
        <textarea value={description} onChange={(descriptions) => setDescription (descriptions.target.value)} className="sm:w-[350px] w-[300px]  h-[90px] p-2 outline-none rounded" placeholder="Enter Description......."></textarea><br></br>
        <label className="text-2xl font-thin  text-white ">Pick Color</label><br></br>
        <input value={color} onChange={(color) => setColor(color.target.value)} className=" mb-1 rounded" type="color"/><br></br>
      
        <button onClick={handleRegisterNote} className="text-blue-500 font-thin px-10 text-2xl bg-white rounded-[8px] mt-4  py-1">Save</button>
    </form>
    </div>
    <ToastContainer/>
 </div>
}
export default Form