import { use, useContext } from "react";
import { Helper } from "../../store/store";
import Load from "../loader/loader.jsx";
import {Link} from "react-router-dom";
function Menue(){
    const{minfo,loading,setdata,setimg,msg,get,data}=useContext(Helper);
    return <div className="min-h-screen">
        <h1 className="text-center mt-16 text-4xl text-red-600">QUICK ACCESS FOR POPULAR CATEGORIES</h1>
        <div className="flex  justify-center items-center mt-5 gap-9 text-3xl text-cyan-600 cursor-pointer ">
            <form onSubmit={get} className=" flex gap-10 flex-wrap " id="f">

            <button className="bg-yellow-600 p-3 rounded-4xl" onClick={()=>{setdata("avengers")}}>AVENGERS</button>
             <button className="bg-yellow-600 p-3 rounded-4xl" onClick={()=>{setdata("harry potter")}}>HARRY POTTER</button>
            <button className="bg-yellow-600 p-3 rounded-4xl" onClick={()=>{setdata("tekken")}}>TEKKEN</button>
            <button className="bg-yellow-600 p-3 rounded-4xl" onClick={()=>{setdata("pele")}}>PELE</button>
            </form>
           
        </div>
        <h1 className="text-center mt-4 text-4xl text-red-600">POPULAR CATEGORIES</h1>
        <p className="text-center mt-2 capitalize text-cyan-600 text-3xl">here is the list of popular movies</p>
        {loading&&<Load/>}
       {data!==null&&<h1 className="mt-6 text-center text-4xl uppercase text-red-800">{msg}</h1>} 
        <div className="flex flex-wrap justify-center items-center gap-5 "id="t">
        
            {minfo.map((i,index)=>(
                
                <div key={index} onClick={()=>setimg(i.Poster)} className="mt-10 shadow-md p-3 rounded-4xl w-80 xl:w-auto md:w-auto lg:w-auto border border-cyan-600 shadow-white bg-gradient-to-r from-cyan-200 to-pink-200 hover:scale-120 transition ease-in-out duration-150">
                    <div>
                <Link to="/details"> <img src={i.Poster} alt={i.Title} onClick={()=>setdata(i.Title)} className="mt-3 rounded-4xl "/></Link>
                   <h1 className="text-2xl w-65 m-7 text-cyan-600 capitalize ">{i.Title}</h1>
                   </div>
                    
                    

                    </div>

            ))}

        </div>
    </div>

}
export default Menue;