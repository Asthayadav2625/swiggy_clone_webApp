import React , { lazy,Suspense, useEffect, useState } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
//import About from "./component/about";
import ContactUs from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import userContext from "./utils/userContext";
 
 
//import Cards from "./component/Cards";
 
 /*
 -web page
  -header
    -logo
    -nav-bar
  -body
   -search bar
   -cards
  -footer
   -contact
   -copyright
   -links

  */

 
 
 
 const Grocery = lazy(()=>import("./component/Grocery"));
  const AboutCompo=lazy(()=>import("./component/About"));
  //Authentication...............
 const MainApp=()=>{
  const [userName,setuserName]=useState();

  useEffect(()=>{
      //dummy data
      const data={
        fname:"Astha yadav",
      };
      setuserName(data.fname);
  },[]);
  return(
  <userContext.Provider value={{loggedInUser:userName,setuserName}}> 
    <div className="MainApp">
      <Header/>
      <Outlet/>
    </div>
  </userContext.Provider>
);
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainApp/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}>
          <AboutCompo/>
        </Suspense> 
      },
      {
          path:"/contactUs",
          element:<ContactUs />
      },
      {
          path:"/grocery",
          element:<Suspense fallback={<h1>Loading...</h1>}>
            <Grocery/>
          </Suspense> 
      },
      {
            path:"/restaurants/:resid",
            element:<RestaurantMenu />
      },   
  
        
    ],
    errorElement:<Error/>,
  },
  
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter}/>); 

 