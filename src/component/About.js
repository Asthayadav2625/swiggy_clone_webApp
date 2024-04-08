// import ClassCompo from "./ClassCompo";
// import React from "react";
// import userContext from "../utils/userContext";
// class About extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("Parent constructor");
//   }

//   componentDidMount(){
//     console.log("parent component Did Mount");
//   }
//   render(){
//     console.log("parent render");
//     return (
//       <div>
//         <h1>This is about page</h1>
//          <div>
//             <userContext.Consumer>
//               {({loggedInUser})=>  <h1 className="font-bold text-lg">{loggedInUser}</h1>}
//             </userContext.Consumer>
//          </div>
//         <h2>Class based component</h2>   
//          <ClassCompo name={"first "} location={"pune"}/>
//          <ClassCompo name={"second "} location={" delhi"}/>
//          <ClassCompo name={" third "} location={" delhi"}/>
//       </div>               
//     );
//   }                                       
// }
import { Food_URL } from "../utils/constant";
 const About=()=>{
  return (
    <div className="flex m-5 p-5 justify-between flex-wrap items-center">
      <div className="m-2 p-2">
        <h1 className="text-black text-5xl font-bold m-2">Welcome to!!</h1>
        <h1  className="text-black text-5xl font-bold m-2"> The World of </h1>
        <h1 className="bg-orange-400 rounded-md text-white text-5xl font-bold m-2">HEALTHY AND TASTY FOOD</h1>
        <h2 className="text-black text-lg text-center">"A Little Bliss In Every Bite"</h2>
      </div>
      <div className="m-6 p-6">
      <img  src= {Food_URL}></img>
      </div>
    </div>  
  )
 }
export default About;