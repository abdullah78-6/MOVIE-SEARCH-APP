import { useContext } from "react";
import { Helper } from "../../store/store";
import { IoSearch } from "react-icons/io5";
function Navbar(){
    const{nav,setnav,setdata,get}=useContext(Helper);
    return <div className="flex     shadow-lg bg-white top-0 z-50  px-2 py-4 items-center justify-between ">
        <h1 className="text-4xl text-cyan-600 mb-3">MOVIE-<span className="text-red-600">SEARCH</span>-APP</h1>
        <ul className="flex flex-wrap justify-center items-center  gap-4 text-2xl capitalize text-gray-600 ">
            
            <li onClick={()=>setnav("home")} className={`${nav==="home"?" border-b-4 border-b-cyan-600 rounded-4xl p-2":""}`}>home</li>
            <li onClick={()=>setnav("contact")} className={`${nav==="contact"?" border-b-4 border-b-cyan-600 rounded-4xl p-2":""}`}>contact</li>
            <li onClick={()=>setnav("categ")} className={`${nav==="categ"?" border-b-4 border-b-cyan-600 rounded-4xl p-2":""}`}>categories</li>
            <li onClick={()=>setnav("top")} className={`${nav==="top"?" border-b-4 border-b-cyan-600 rounded-4xl p-2":""}`}>top-hits</li>
                    
        </ul>
    
            <form className="flex items-center rounded-full px-3 py-1">
                <input required type="text"placeholder="enter-movie" className="text-gray-600 border border-blue-600 p-2 rounded-4xl text-2xl " onChange={(e)=>setdata(e.target.value)}/>
            <button onClick={get}> <IoSearch /></button>
        
        </form>

    

    
    </div>
        
}
export default Navbar;