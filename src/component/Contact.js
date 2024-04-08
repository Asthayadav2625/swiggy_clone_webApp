import { Contact_URL } from "../utils/constant";
const ContactUs=()=>{
    return (
        <div className="flex  flex-wrap m-4 p-4 justify-between">
            <div className="w-96 m-10 p-10">
                <img src={Contact_URL}></img>
            </div>
              

             <div className="flex flex-col m-4 mr-10 p-6 items-center">
                 <h1 className="m-4 p-4 text-3xl font-bold">Contact Us</h1>
                 <form className="flex flex-col items-center w-96">
                 <input type="text" placeholder="Name" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"></input>
                 <input type="text" placeholder="Email" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"></input>
                  <textarea placeholder="Type your message here.." required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" ></textarea>
                 <button type="submit" className="bg-orange-400 m-2 p-2 rounded-lg">submit</button>
                 </form>
             </div>
        </div>
         
    );
};
export default ContactUs;