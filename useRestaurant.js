import { useEffect,useState } from "react"
//import { json } from "react-router-dom";
import { ResMenu_API } from "./constant";

//custom hook
const useRestaurant=(resid)=>{

    const[resMenu,setresMenu]=useState(null);
     
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async()=>{
        const data= await fetch(ResMenu_API + resid);
        const json=await data.json();
        setresMenu(json.data);

    }
    return resMenu;
};
export default useRestaurant;
    
    