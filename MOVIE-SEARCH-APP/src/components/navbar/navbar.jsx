import { useContext } from "react";
import { Helper } from "../../store/store";
import { IoSearch } from "react-icons/io5";
import {GoSun} from "react-icons/go";
import {FaMoon} from "react-icons/fa";
function Navbar(){
    const{nav,setnav,setdata,get,theme,settheme}=useContext(Helper);
    return <div className="flex     shadow-lg bg-white top-0 z-50  px-2 py-4 items-center justify-between ">
        <h1 className="text-4xl text-cyan-600 mb-3">MOVIE-<span className="text-red-600">SEARCH</span>-APP</h1>
        <ul className="flex flex-wrap justify-center items-center  gap-4 text-2xl capitalize text-gray-600 ">
            
            <li onClick={()=>setnav("home")} className={`${nav==="home"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>home</li>
            <li onClick={()=>setnav("contact")} className={`${nav==="contact"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>contact</li>
            <li onClick={()=>setnav("categ")} className={`${nav==="categ"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>categories</li>
            <li onClick={()=>setnav("top")} className={`${nav==="top"?" border-b-4 border-b-cyan-600 rounded-4xl p-2 cursor-pointer":"cursor-pointer"}`}>top-hits</li>
                    
        </ul>
    
            <form className="flex items-center rounded-full px-3 py-1 gap-2">
                <input required type="text"placeholder="enter-movie" className="text-gray-600 border border-blue-600 p-2 rounded-4xl text-2xl " onChange={(e)=>setdata(e.target.value)}/>
                <button onClick={get} className="text-4xl text-red-600"> <IoSearch /></button>
            </form>
        
            {!theme?<button className="text-3xl text-cyan-600" onClick={()=>settheme(true)}><GoSun/></button>:<button onClick={()=>settheme(false)} className="text-3xl text-cyan-900"><FaMoon/></button>}
    </div>
}
export default Navbar;