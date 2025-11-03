import { createContext, useEffect, useState } from "react";

export const Helper=createContext();
export function Gives({children}){
    let [nav,setnav]=useState("");
    let[data,setdata]=useState("bollywood");
    let[loading,setloading]=useState(false);
    let [theme,settheme]=useState(false);
    let [minfo,setinfo]=useState([]);
    const apiurl = data?`https://www.omdbapi.com/?s=${data}&apikey=b62df0e5`:`https://www.omdbapi.com/?s=&apikey=b62df0e5`;
    useEffect(()=>{
        setTimeout(()=>{//debouncing 
            get();

        },200);
        

    },[]);
   async function get(e){
    if(e){
        e.preventDefault();

    }
    
   console.log(data);
   setloading(true);
   try{
let data2=await fetch(apiurl,{
    
      method:"GET",
    headers:{
        Accept:"application/json"
    }
 })   


 const result=await data2.json();
// setinfo(Array.isArray(result.results)?result.results:[]);
setinfo(result.Search||[]);
}


catch(err){
    console.log("err occur",err);
}
finally{
    setloading(false);
}

    }
    return (
        <Helper.Provider value={{nav,setnav,setdata,get,theme,settheme,minfo,loading}}>
            {children}
        </Helper.Provider>
    )
}