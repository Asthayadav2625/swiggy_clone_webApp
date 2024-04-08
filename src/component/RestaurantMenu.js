
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
    const {resid} = useParams();
    const resMenu = useRestaurant(resid);
    const [activeIndex,setactiveIndex]=useState(0);
    //conditional Rendering
     if(resMenu === null) return <Shimmer />;
     const{name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;
     //const{itemCards}=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card;
     console.log(resMenu?.cards[2]?.card?.card?.info);

    const category=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
           c.card?. card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(category);
             
    return( 
        <div className="text-center">      
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}-{ costForTwoMessage }</p>
             {category && category.map((category,index)=>(
                //controlled component
                 <RestaurantCategory key={category.card.card.title} data={category?.card?.card}
                  showitems={index===activeIndex && true}
                  setactiveIndex={()=>setactiveIndex(index)}
                  />
                   
            )) }
        </div>
    );
};
export default RestaurantMenu;
