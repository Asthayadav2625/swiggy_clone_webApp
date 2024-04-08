//import resObj from "../utils/mockData";
import { useContext } from "react";
import { CARD_URL } from "../utils/constant";
import userContext from "../utils/userContext";
//import starimg  from "../utils/constant";
 
const Cards=(props)=>{
    const {resData}=props;
    const {loggedInUser}=useContext(userContext);
    const{
        name,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        avgRating,
        sla}=resData?.info;
    ;
    return (
      <div className="restro-card m-4 p-3 w-[240px] h-[330px] bg-gray-100 rounded-lg shadow-2xl hover:bg-gray-200"> 
       <img className="logo-img rounded-lg w-[250px] h-[150px] items-center" alt="food-image"src={CARD_URL+cloudinaryImageId}></img>
        <h3 className="font-bold py-1 text-sm">{name}</h3>
        <h4> {cuisines.join(", ")}</h4>
        <span className="text-center flex   mt-2">
        <h4 className="text-white bg-green-300 m-1 h-4.1 rounded-sm">{avgRating}⭐</h4> 
        
        <h4 className="m-1">{sla.deliveryTime}min</h4>
         
        <h3 className="m-1 ">{costForTwo}</h3>
         
           
        </span>
    </div>
    );
};

//higher order component 
//  export const withPromotedLabel=(Cards)=>{
//    return (props)=>{
//     return (
//         <div>
//             <label>Promoted</label>
//             <Cards{...props}/>
//         </div>
//     );
//    };
// };
  
 

export default Cards;