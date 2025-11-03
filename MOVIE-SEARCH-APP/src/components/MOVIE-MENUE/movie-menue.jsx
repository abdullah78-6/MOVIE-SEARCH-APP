import { use, useContext } from "react";
import { Helper } from "../../store/store";
import Load from "../loader/loader.jsx";
function Menue(){
    const{minfo,loading}=useContext(Helper);
    return <div>
        <h1 className="text-center mt-4 text-4xl text-red-600">POPULAR CATEGORIES</h1>
        <p className="text-center mt-2 capitalize text-cyan-600 text-3xl">here is the list of popular movies</p>
        {loading&&<Load/>}
        <div className="flex flex-wrap justify-center items-center">
        
            {minfo.map((i,index)=>(
                
                <div key={index}>
                    <h1>{i.Title}</h1>
                    <img src={i.Poster} alt={i.Title}/>
                   
                    

                    </div>

            ))}

        </div>
    </div>

}
export default Menue;