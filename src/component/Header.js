import { useContext, useEffect, useState } from "react";
import {LOGO_URL}from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { UseSelector, useSelector } from "react-redux";

const Header=()=>{
      const[btnNameReact,setbtnNameReact]=useState("Login");
      const onlinestatus=useOnlineStatus();
      
      const {loggedInUser}=useContext(userContext);
      //console.log(data);
      const cart=useSelector((store)=>store.cart.items);

      useEffect(()=>{
        //console.log("useEffect called");
      },[btnNameReact]);
    return (
   <div className="flex justify-between bg-white shadow-lg h-20"> 
       <div className="logo" >
      <img className="w-50 h-16" src= {LOGO_URL}></img>
       </div>
       <div className="flex items-center">
       <div className="text-center m-5 p-5 font-bold">{loggedInUser}</div>
        <ul className="flex m-4 p-4">
             
             {/* {<li className="px-2 font-bold">Hii!!{loggedInUser}</li>} */}
    
             <li className="px-2 hover:bg-orange-300 rounded-lg font-bold"><Link to="/">Home</Link></li>
             <li className="px-2  hover:bg-orange-300 rounded-lg font-bold"><Link to="/about">About</Link></li>
             {/* <li className="px-2  hover:bg-white rounded-xl"><Link to="/grocery">Grocery</Link></li> */}
             <li className="px-2 hover:bg-orange-300 rounded-lg font-bold"><Link to="/contactUs">Contact</Link></li>
             <li className="px-2  font-bold"><Link to="/cart">🛒({cart.length})</Link></li>
            
            
            <button className="login" onClick={() => {
                btnNameReact === "Login" ? setbtnNameReact("Logout") :
                  setbtnNameReact("Login");
            } }>{btnNameReact}</button>
            <li className="px-2">{onlinestatus ? " 🟢" : "🔴"}</li>
             
        </ul>
       </div> 
   </div>
    
 );
}
export default Header;