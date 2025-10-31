import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer(){
    return <div className="bg-cyan-700 text-white flex mt-15 justify-between items-center flex-wrap py-10 px-6 items-start ">
        <div className=" ml-3 max-w-sm">
            <h1 className="text-4xl uppercase text-red-600">movie-search-app</h1>
            <p className="text-2xl capitalize">here you can get a latest update of all types of movies  </p>
             <div className="flex gap-4 text-4xl text-white mt-4">
              <a href="#"><FaFacebookF className="hover:text-red-600 cursor-pointer" /></a>
          <a href="#"><FaInstagram className="hover:text-red-600 cursor-pointer" /></a>
          <a href="#"><FaTwitter className="hover:text-red-600 cursor-pointer" /></a>
          <a href="#"><FaYoutube className="hover:text-red-600 cursor-pointer" /></a>
        </div>
        </div>
       
        <div className="w-120">
            <h1 className="text-3xl text-red-600 capitalize">subscribe to recieve all latest updates for uncoming movies</h1>
            <div className=" mt-3 flex flex-wrap gap-4">
                <input className="border-3 capitalize p-3 rounded-4xl text-2xl border-red-600" type="text"placeholder="enter-email"/>
                <button className="text-2xl capitalize bg-yellow-600 p-3 rounded-4xl hover:bg-red-600">subscribe</button>

            </div>

        </div>
        <div className="flex flex-col">
            <h1 className="text-4xl uppercase mr-5 text-red-600">contact-us</h1>
            <p className="flex items-center gap-2 text-2xl" >
                <MdEmail className="text-3xl text-yellow-600"/>:abdullah##@gmail.com
                </p>
            <p className="flex items-center gap-2 text-2xl">
                <FaPhoneAlt className="text-3xl text-yellow-600"/>:9767#####
                </p>
        </div>

    </div>

}
export default Footer;