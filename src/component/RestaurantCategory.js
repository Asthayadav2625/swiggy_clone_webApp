import { useState } from "react";
import ItemsList from "./ItemsList";


const RestaurantCategory=({data,showitems,setactiveIndex})=>{

    //console.log(data);
      
    const handleClick=()=>{
        setactiveIndex(); 
    }
    return (
        <div>
            <div  className="bg-gray-100 shadow-lg w-6/12 mx-auto my-4 p-4 "   >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                  <span className="font-bold text-lg">{data.title}-({data.itemCards.length})</span>
                  <span>🔽</span>
                </div>
             {/* accordion body */}
              {showitems && <ItemsList item={data.itemCards}/>}
            </div>
        </div> 
        
    ); 
};
export default RestaurantCategory;
