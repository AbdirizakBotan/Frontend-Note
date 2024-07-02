import { useEffect, useState } from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Home(){
    const [notes, setNotes] = useState([])
//get api
    const handleGetNotes =()=>{
        axios.get("http://localhost:5000/read").then((res)=>{
            setNotes(res.data)
            console.log(res.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    //delete api
    const deleteNote = (id)=>{
        axios.delete(`http://localhost:5000/delete/${id}`).then((res)=>{
             console.log(res.data)
             toast("Note Deleted SuccessFully ",{
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                // onClose:() => navigate("/")
            })
             handleGetNotes()
        }).catch((error)=>{
            console.log(error)
        })
    }

useEffect(()=>{
handleGetNotes()
},[])
return <div>
    <Header/>
    <div className="grid sm:grid-cols-[300px_300px_300px] grid-cols-[300px]  mt-12 gap-12 mb-4 justify-center">
      {
        notes.map((note)=>{
         return <div className="p-3 rounded-[8px] text-white" style={{backgroundColor: note.color}}>
         <h3 className="text-3xl">{note.title.substring(0,20)}</h3>
         <p className="text-2xl font-thin">{note.description.substring(0,160)}</p>
         <div className="mt-24 flex ">

         <p className="font-semibold">{new Date(note.createdAt).toDateString()}</p>
         <div className="flex gap-3 ml-[6em] -mt-2">
         <i  onClick={()=> deleteNote(note._id)} class="fa-solid text-red-500 text-2xl fa-trash"></i>
         <Link  to={`/updatenote/${note._id}`}><i class="fa-solid text-2xl -mt-[0.05em] text-green-500  fa-pen-to-square"></i></Link>
         </div>
         </div>
        </div>
        })
      }
    </div>
    <ToastContainer/>
</div>
}
export default Home