import { createContext, useEffect, useState } from "react";

export const Helper=createContext();
export function Gives({children}){
    let [nav,setnav]=useState("");
    let[data,setdata]=useState();
    let[loading,setloading]=useState(false);
    let [theme,settheme]=useState(false);
    function get(e){
        e.preventDefault();
        console.log(data);

    }
    
        
    
    return (
        <Helper.Provider value={{nav,setnav,setdata,get,theme,settheme}}>
            {children}
        </Helper.Provider>
    )
}