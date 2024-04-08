import { useDispatch } from "react-redux";
import { CARD_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const ItemsList = ({ item }) => {
const dispatch = useDispatch();

const handleAdditem=(item)=>{
   dispatch(addItems(item));
};

    return (
     <div> {item.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between">
          <div className="w-6/12">
            <div className="py-2 font-bold">
                <span>{item.card.info.name}</span>
                <span>- ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            </div> 
              <p className="text-xs py-4">{item.card.info.description}</p>
             </div>
              {/* THis is image div */}
             <div className="p-4 w-3/12"> 
                <div className="absolute">
                    <button className="p-2 mx-16 bg-white text-black rounded-lg"
                     onClick={()=>handleAdditem(item)}>Add+</button>
                </div>
               <img src={CARD_URL + item.card.info.imageId}/>
            </div>
        </div>
              
        ))}
    </div>
    );
};
export default ItemsList;