import { NavLink } from "react-router-dom"
import { HandleSubscribe } from "../features"
import { useState } from "react"
import { FaAt, FaPhone } from "react-icons/fa"

type Props = {}

function Footer({}: Props) {

  const [email, setemail] = useState('')

  return (
    <footer className="bg-gray-900">
  <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    {/* <!-- Grid --> */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div className="col-span-full lg:col-span-1">
      <NavLink to={'/'} className="flex-none  cursor-pointer text-xl font-black text-white "  aria-label="Brand"><span className="text-3xl">C</span>hrome<span className="text-3xl">A</span>xis</NavLink>
      </div>
      {/* <!-- End Col --> */}

      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Product</h4>

        <div className="mt-3 grid space-y-3">
          <p><NavLink to={"/pricing"} className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >Pricing</NavLink></p>
          <p><NavLink to={"/login"} className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >Login</NavLink></p>
          {/* <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >Docs</a></p> */}
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Company</h4>

        <div className="mt-3 grid space-y-3">
          <p><NavLink to={'/'} className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >Home</NavLink></p>
          <p><NavLink to={'/aboutus'} className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >About us</NavLink></p>
          <p><NavLink to={"/careers"} className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >Careers</NavLink> <span className="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">We're hiring</span></p>
          {/* <p><NavLink to={"/login"} className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >Login</NavLink></p> */}
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div className="col-span-2">
        <h4 className="font-semibold text-gray-100">Stay up to date</h4>

        <form>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">Search</label>
              <input value={email} onChange={(e) =>  setemail(e.target.value)} type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email"/>
            </div>
            <a onClick={() => HandleSubscribe(email)} className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" >
              Subscribe
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Latest news updates only. Never spam.
          </p>
        </form>
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}

    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">© 2019 Chrome Axis. All rights reserved.</p>
      </div>
      {/* <!-- End Col --> */}

      {/* <!-- Social Brands --> */}
      <div id="contactus" className="flex flex-col mr-40">
      <div className="flex items-center gap-x-4">
        <FaPhone className="text-gray-50" />
        <p className="text-gray-50">+12163695117</p>
      </div>

      <div className="flex items-center gap-x-4">
        <FaAt className="text-gray-50" />
        <p className="text-gray-50">Admin@chromeaxis.com</p>
      </div>

      </div>
      {/* <!-- End Social Brands --> */}
    </div>
  </div>
</footer>
  )
}

export default Footer