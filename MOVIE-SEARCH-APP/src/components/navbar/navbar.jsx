import { useContext } from "react";
import { Helper } from "../../store/store";
import { IoSearch } from "react-icons/io5";
import {GoSun} from "react-icons/go";
import {FaMoon} from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar(){
    const{nav,setnav,setdata,get,theme,settheme}=useContext(Helper);
    return <div className="flex     shadow-lg bg-white top-0 z-50  px-2 py-4 items-center justify-between ">
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-cyan-600 mb-3">MOVIE-<span className="text-red-600">SEARCH</span>-APP</h1>
        <ul className=" hidden md:flex flex-wrap justify-center items-center  gap-4 text-2xl capitalize text-gray-600 lg:md:flex flex-wrap justify-center items-center  gap-4 text-2xl capitalize text-gray-600 xl:md:flex flex-wrap justify-center items-center  gap-4 text-2xl capitalize text-gray-600  ">
            
            <Link to="/"  onClick={()=>setnav("home")} className={`${nav==="home"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>home</Link>
            <a href="#c" onClick={()=>setnav("contact")} className={`${nav==="contact"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>contact</a>
            <a href="#f" onClick={()=>setnav("categ")} className={`${nav==="categ"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>categories</a>
            <a href="#t" onClick={()=>setnav("top")} className={`${nav==="top"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>top-hits</a>
                    
        </ul>
    
            <form className="flex items-center rounded-full px-3 py-1 gap-2 flex-wrap " onSubmit={get}>
                <input required type="text"placeholder="enter-movie" className="text-gray-600 border border-blue-600 p-0 xl:p-2 md:p-2 lg:p-2 rounded-4xl text-sm md:text-2xl lg:text-2xl xl:text-2xl w-40 md:w-60 xl:w-60 lg:w-60 " onChange={(e)=>setdata(e.target.value)}/>
                <button type="submit"  className="text-2xl md:text-4xl xl:text-4xl lg:text-4xl  text-red-600"> <IoSearch /></button>
                    {!theme?<button type="theme" className="  text-2xl md:text-3xl lg:text-3xl xl:text-3xl  text-cyan-600 " onClick={()=>settheme(true)}><GoSun/></button>:<button onClick={()=>settheme(false)} className=" text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-cyan-900  " type="theme"><FaMoon/></button>}
                
            </form>
            
            

            
        
            
    </div>
}
export default Navbar;