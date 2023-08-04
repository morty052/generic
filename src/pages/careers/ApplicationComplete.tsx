import {NavLink} from "react-router-dom"
import { checkmark } from "../../assets"

const ApplicationComplete = () => {
const email = localStorage.getItem("email")
  

  return (
    <div className="min-h-screen bg-[#38bdf8]    "> 
      <div className="container mx-auto py-10 max-w-xl ">
         <div className="flex justify-center">
          <img src={checkmark} alt="" className="h-40 w-40" />
         </div>
        <p className="text-3xl text-center text-gray-50 my-2">Application Submitted</p>
        <p className=" text-center text-gray-50">Keep an eye on your email {email} for updates on your aplication from careers@chromeaxis.com. </p>
        <div className="py-4 flex justify-center">
         <NavLink to={'/careers'}>
         <button className=" border border-white px-6 text-white py-2 rounded-2xl">Browse more jobs </button>
         </NavLink>
          </div>
      </div>
    </div>
  )
}

export default ApplicationComplete