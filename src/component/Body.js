// import Cards from "./Cards";
// import Shimmer from "./shimmer";
// import { useState,useEffect,useContext} from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// //import { withPromotedLabel } from "./Cards"; 
// import userContext from "../utils/userContext";

// const Body=()=>{
//    const [ListofRestaurant,setListofRestaurant]=useState([]);
//    const[searchText,setsearchText]=useState("");
//     const[filteredRestaurant,setfilteredRestaurant]=useState([]);
//    const {loggedInUser,setuserName}=useContext(userContext);
//   //const RestuarantCardpromoted=withPromotedLabel(Cards);
     
     
//    useEffect(()=>{
//       fetchData();
//    },[])  

//    const fetchData= async()=>{
//       const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//       const json= await data.json();
//       setListofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//    }

//    const onlinestatus = useOnlineStatus();
//    console.log(onlinestatus);
//    if(onlinestatus === false) return 
//    (
//    <h1>
//       You are offline!!check your internet connection
//    </h1>
//    );
//   //*****using shimmer ui****
//     //conditional rendering
    
//    return ListofRestaurant?.length===0 ? (<Shimmer /> 
//    ) : (

//     <div className="body">
//        <div className="filter flex flex-wrap ">
//          <div className="search m-2 p-2">
//             <input type="text" className="search-box border border-solid border-black"
//             value={searchText} onChange={(e)=>{
//                const name=e.target.value;
//                setsearchText(name);
//             }}
//             />
//             {/* Search */}
//             <button className="m-4 px-4 py-2 bg-green-100 rounded-lg"onClick={()=>{
//                console.log("search clicked");
//                 //filtered restaurants on clicking search button
//                 const FilteredRes=ListofRestaurant.filter((res)=>
//                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
//                 );
//                  setfilteredRestaurant(FilteredRes);
//             }}>search</button>
            
//          </div>
            
//        <div className="search p-2 m-2  flex items-center"> 
//          <button className="filter-btn px-4 py-2  bg-green-100 rounded-lg" 
//            onClick={()=>{
//              const filterList=ListofRestaurant.filter((res)=>
//                res.info.avgRating>4.2);
//               setfilteredRestaurant(filterList);
//            }}>Top Rated Restaurants</button>
//         </div>
//         <div className="search p-2 m-2  flex items-center">
//            <label>Username:</label>
//            <input className="p-2 border border-black" 
//            value={loggedInUser}
//            onChange={(e)=>{
//              setuserName(e.target.value);
//            }}></input>
//           </div>
//        </div>

//       <div className="res-container flex flex-wrap">
           
// {filteredRestaurant && filteredRestaurant.map((restaurants)=>(
//  <Link 
//     key={restaurants.info.id}
//     to={"/restaurants/"+restaurants.info.id}>
//       {/* {restaurants.data.promoted ? (
//       <RestuarantCardpromoted  resData={restaurants}/>): (
//       <Cards  resData={restaurants}/>
//    )} */}
//      <Cards  resData={restaurants}/>
//  </Link>
// ))}
//       </div>
//     </div>
//    )
// }

// export default Body;


/////code -2///////////////
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";

const Body = () => {   
    const [ListofRestaurant, setListofRestaurant] = useState([ ]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([" "]);
    //const { loggedInUser, setUserName } = useContext(userContext);
    const { loggedInUser, setUserName } = useState("");
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            if (!data.ok) {
                throw new Error("Failed to fetch data");
            }
            const json = await data.json();
            setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error: You can set a state to show an error message or retry fetching data.
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <h1>
                You are offline!! Check your internet connection
            </h1>
        );
    }
    else{
      return ListofRestaurant?.length===0 ? (<Shimmer/> ):
        (
        <div className="body">
            <div className="filter flex flex-wrap ">
                <div className="search m-3 p-3">
                    <input type="text" placeholder="Search a restaurant.."className="search-box border border-solid border-black m-2 p-2"
                        value={searchText}
                        onChange={(e) => {
                            const name = e.target.value;
                            setSearchText(name);
                        }}
                    />
                    <button className=" bg-orange-300 m-2 p-2 ml-0" onClick={() => {
                        const filteredRes = ListofRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRes);
                    }}>Search</button>
                </div>

                <div className="search p-2 m-2  flex items-center">
                    <button className="filter-btn px-4 py-2  bg-orange-300 rounded-lg"
                        onClick={() => {
                            const filterList = ListofRestaurant.filter((res) =>
                                res.info.avgRating > 4.2
                            );
                            setFilteredRestaurant(filterList);
                        }}>Top Rated Restaurants</button>
                </div>
                {/* <div className="search p-2 m-2  flex items-center">
                    <label>Username:</label>
                    <input placeholder="Enter username..." className="p-2 border border-black"
                        value={loggedInUser}
                        onChange={(e) => {
                            const user=e.target.value;
                            setUserName( user);
                        }
                         }/>
                </div> */}
            </div>

            <div className="res-container flex flex-wrap">
                {filteredRestaurant && filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        <Cards resData={restaurant} />
                    </Link>
                ))}
            </div>
             
    </div>
    );
 }
};

export default Body;