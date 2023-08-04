import { Routes, Route, useNavigate } from "react-router-dom"
import { Progress, message } from "antd"
import { useState } from "react"
import { client } from "../../lib/client"

type Props = {}

function JobPageForms({}: Props) {

  const navigate = useNavigate()

  const ContactInfo = () => {
  const [email, setemail] = useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [phone, setphone] = useState("")
  const [company, setcompany] = useState("")
  
  

const handleComplete = () =>{
  if (!email || !firstname ||!lastname) {
    return message.error("Please fill all required info.")
  }

  localStorage.setItem("email", email)
  localStorage.setItem("firstname", firstname)
  localStorage.setItem("phone", phone)
  localStorage.setItem("company", company)
  localStorage.setItem("lastname", lastname)
navigate("personalinfo")
}

    return(
      <>
      {/* <!-- ContactSection --> */}

        
        <div className="sm:col-span-12">
          <div className="w-full flex justify-between">
           <p onClick={() => navigate(-1)} className="font-semibold cursor-pointer text-sm">
            Back
           </p>
           <p onClick={() => navigate("/careers")} className="font-semibold cursor-pointer text-sm">
            Exit
           </p>
          </div>
          <Progress percent={20} showInfo={false}/>
        </div>

        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Contact Information
          </h2>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-full-name" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Full name
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input value={firstname} onChange={(e) => setfirstname(e.target.value)} id="af-submit-application-full-name" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500    " placeholder="First Name"/>
            <input value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500   " placeholder="Last name"/>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-email" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Email
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input value={email} onChange={(e) => setemail(e.target.value)} id="af-submit-application-email" type="email" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-3">
          <div className="inline-block">
            <label htmlFor="af-submit-application-phone" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Phone
            </label>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input value={phone} onChange={(e) => setphone(e.target.value)} id="af-submit-application-phone" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500   "/>

          {/* <p className="mt-3">
            <a className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
              <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              Add phone
            </a>
          </p> */}
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-3">
          <div className="inline-block">
            <label htmlFor="af-submit-application-current-company" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Current Company
            </label>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input  value={company} onChange={(e) => setcompany(e.target.value)} id="af-submit-application-current-company" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500   "/>
        </div>
        {/* <!-- End Col --> */}
      {/* <!-- End Section --> */}
      <div className="sm:col-span-12 py-4">
      <button onClick={() => handleComplete()} type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ">
        Next
      </button>
      </div>
      </>
    )
  }

  const PersonalInfo = () => {
    const [loading, setLoading] = useState(false)
    const [ssn, setssn] = useState("")
    const [dob, setdob] = useState("")

    const ResumeInput = ({ id }) => {
      // const [fileName, setFileName] = useState('');
      const maxFileSize = 8 * 1024 * 1024; // 8MB
    
      const handleFileChange = async (e) => {
        const file = await e.target.files[0];
         setLoading(true)  
         if (file.size > maxFileSize) {
          setLoading(false)
          return message.error("max file size exceeded")
        }
  
        if (file ) {
          // setFileName(file.name);
           await client.assets.upload(`file`, file).then((res) => {
           localStorage.setItem('resumefile', res._id)
           console.log(res)
           setLoading(false)
           message.success('Uploaded Resume successfully');
          })
         console.log(file.name)
       
  //  onChange(file);
        } else {
          // setFileName('');
          message.error('Please select a supported file');
        }
      };
    
      return (
        <div>
          <input id={id} className='hidden' type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
          {/* {<p>Selected file: {fileName }</p>} */}
        </div>
      );
    };
    const DlFrontInput = ({ id }) => {
      // const [fileName, setFileName] = useState('');
      const maxFileSize = 8 * 1024 * 1024; // 8MB
    
      const handleFileChange = async (e) => {
        const file = await e.target.files[0];
         setLoading(true)
  
         if (file.size > maxFileSize) {
          setLoading(false)
          return message.error("max file size exceeded")
        }
  
        if (file ) {
          // setFileName(file.name);
           await client.assets.upload(`file`, file).then((res) => {
           localStorage.setItem('dlfront', res._id)
           setLoading(false)
           message.success('Uploaded Driverslicense/Front successfully');
          })
         console.log(file.name)
       
  //  onChange(file);
        } else {
          // setFileName('');
          message.error('Please select a supported file');
        }
      };
    
      return (
        <div>
          <input id={id} className='hidden' type="file" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
          {/* {<p>Selected file: {fileName }</p>} */}
        </div>
      );
    };
    const DlBackInput = ({ id }) => {
      // const [fileName, setFileName] = useState('');
      const maxFileSize = 8 * 1024 * 1024; // 8MB
    
      const handleFileChange = async (e) => {
        const file = await e.target.files[0];
         setLoading(true)
  
         if (file.size > maxFileSize) {
          setLoading(false)
          return message.error("max file size exceeded")
        }
  
        if (file ) {
          // setFileName(file.name);
           await client.assets.upload(`file`, file).then((res) => {
           localStorage.setItem('dlback', res._id)
           setLoading(false)
           message.success('Uploaded Driverslicense/Back successfully');
          })
         console.log(file.name)
       
  //  onChange(file);
        } else {
          // setFileName('');
          message.error('Please select a supported file');
        }
      };
    
      return (
        <div>
          <input id={id} className='hidden' type="file" accept=".jpg, .png, .jpeg" onChange={handleFileChange} />
          {/* {<p>Selected file: {fileName }</p>} */}
        </div>
      );
    };
    

    const handleComplete = () =>{
      
      if (!ssn ||!dob ) {
        return message.error("Please fill all required info.")
      }

      if (loading) {
        return message.error("Uploading files wait a moment.")
      }
      localStorage.setItem("ssn",ssn)
      localStorage.setItem("dob", dob)
      navigate("otherinfo")
      }

    return(
      <>
        {/* <!-- Personal Section --> */}


        <div className="sm:col-span-12">
          <div className="w-full flex justify-between">
           <p  onClick={() => navigate(-1)} className="font-semibold cursor-pointer text-sm">
            Back
           </p>
           <p onClick={() => navigate("/careers")} className="font-semibold cursor-pointer text-sm">
            Exit
           </p>
          </div>
          <Progress percent={50} showInfo={false}/>
        </div>

        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Personal information
          </h2>
        </div>
        {/* <!-- End Col --> */}
          
          {/* RESUME */}
        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-resume-cv" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Resume/CV
          </label>
        </div>
        {/* <!-- End Col --> */}
   
        <div className="sm:col-span-9">
          {/* <label htmlFor="af-submit-application-resume-cv" className="sr-only">Choose file</label> */}
          {/* <input type="file" name="af-submit-application-resume-cv"  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   
            file:bg-transparent file:border-0
            file:bg-gray-100 file:mr-4
            file:py-2 file:px-3
             "/> */}
             <label htmlFor="upload" className=" cursor-pointer">
        <div className="rounded-lg border border-gray-400 shadow-sm p-4">
                <a  className="cursor-pointer  flex-col mb-2 text-base font-medium flex gap-x-4 ">
                  <div className="flex items-center gap-x-4">
                      {/* <FaUpload style={{color:'blue'}}/> */}
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3C6 1.89543 6.89543 1 8 1H17.9642C18.5186 1 19.0481 1.23009 19.4263 1.63536L22.3333 4.75L26.4621 9.17369C26.8078 9.54403 27 10.0317 27 10.5383V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#E4E2E0"/>
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="1" width="21" height="30">
        <path d="M6 3C6 1.89543 6.89543 1 8 1H19.1309C19.6853 1 20.2148 1.23009 20.593 1.63536L22.9167 4.125L26.4621 7.92369C26.8078 8.29403 27 8.78174 27 9.28833V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#085FF7"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M30.5 11L17.6666 11L17.6666 -2.75L24.0833 4.125L30.5 11Z" fill="#D4D2D0"/>
        <rect x="6" y="21" width="21" height="10" fill="#E4E2E0"/>
        <rect x="16.5" y="6" width="5.83333" height="6.25" fill="#E4E2E0"/>
        <path d="M24.6132 6.44268C25.2098 7.0819 24.7565 8.125 23.8821 8.125L21.35 8.125C20.7977 8.125 20.35 7.67728 20.35 7.125L20.35 4.41202C20.35 3.5044 21.4617 3.06618 22.081 3.7297L23.2666 5L24.6132 6.44268Z" fill="#D4D2D0"/>
    </g>
    <rect x="11.0167" y="1" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <rect x="17.6667" y="8.125" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <path d="M11.5 23.2C11.5 22.9239 11.7239 22.7 12 22.7H21C21.2761 22.7 21.5 22.9239 21.5 23.2V23.5C21.5 23.7761 21.2761 24 21 24H12C11.7239 24 11.5 23.7761 11.5 23.5V23.2Z" fill="#B4B2B1"/>
    <path d="M16.182 10.1464C16.2552 10.0732 16.3455 10.0275 16.44 10.0092C16.5976 9.97864 16.767 10.0244 16.8891 10.1464L20.4246 13.682C20.6199 13.8772 20.6199 14.1938 20.4246 14.3891L20.2125 14.6012C20.0172 14.7965 19.7006 14.7965 19.5054 14.6012L17.1499 12.2457V19.5C17.1499 19.7761 16.926 20 16.6499 20H16.3499C16.0738 20 15.8499 19.7761 15.8499 19.5V12.317L13.5657 14.6012C13.3704 14.7965 13.0538 14.7965 12.8586 14.6012L12.6464 14.3891C12.4512 14.1938 12.4512 13.8772 12.6464 13.682L16.182 10.1464Z" fill="#B4B2B1"/>
                      </svg>
                      <div className="block">
                      <p className="text-blue-600">Upload Resume  <span className=" self-start text-red-500 gap-x-2">*</span></p>  
                      <p className='text-xs text-gray-600'>(File types: pdf, doc, docx, txt, rtf)</p> 
                      </div>  
                  </div> 
                <ResumeInput id={'upload'}/>
                </a>
        </div> 
             </label> 
        </div>
        {/* <!-- End Col --> */}
             
             {/* DL FRONT */}
        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-resume-cv" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Drivers license/Front:
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          {/* <label htmlFor="af-submit-application-resume-cv" className="sr-only">Choose file</label>
          <input type="file" name="af-submit-application-resume-cv"  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   
            file:bg-transparent file:border-0
            file:bg-gray-100 file:mr-4
            file:py-2 file:px-3
             "/> */}
             <label htmlFor="dlfrontupload" className=" cursor-pointer">
        <div className="rounded-lg border border-gray-400 shadow-sm p-4">
                <a  className="cursor-pointer  flex-col mb-2 text-base font-medium flex gap-x-4 ">
                  <div className="flex items-center gap-x-4">
                      {/* <FaUpload style={{color:'blue'}}/> */}
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3C6 1.89543 6.89543 1 8 1H17.9642C18.5186 1 19.0481 1.23009 19.4263 1.63536L22.3333 4.75L26.4621 9.17369C26.8078 9.54403 27 10.0317 27 10.5383V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#E4E2E0"/>
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="1" width="21" height="30">
        <path d="M6 3C6 1.89543 6.89543 1 8 1H19.1309C19.6853 1 20.2148 1.23009 20.593 1.63536L22.9167 4.125L26.4621 7.92369C26.8078 8.29403 27 8.78174 27 9.28833V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#085FF7"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M30.5 11L17.6666 11L17.6666 -2.75L24.0833 4.125L30.5 11Z" fill="#D4D2D0"/>
        <rect x="6" y="21" width="21" height="10" fill="#E4E2E0"/>
        <rect x="16.5" y="6" width="5.83333" height="6.25" fill="#E4E2E0"/>
        <path d="M24.6132 6.44268C25.2098 7.0819 24.7565 8.125 23.8821 8.125L21.35 8.125C20.7977 8.125 20.35 7.67728 20.35 7.125L20.35 4.41202C20.35 3.5044 21.4617 3.06618 22.081 3.7297L23.2666 5L24.6132 6.44268Z" fill="#D4D2D0"/>
    </g>
    <rect x="11.0167" y="1" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <rect x="17.6667" y="8.125" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <path d="M11.5 23.2C11.5 22.9239 11.7239 22.7 12 22.7H21C21.2761 22.7 21.5 22.9239 21.5 23.2V23.5C21.5 23.7761 21.2761 24 21 24H12C11.7239 24 11.5 23.7761 11.5 23.5V23.2Z" fill="#B4B2B1"/>
    <path d="M16.182 10.1464C16.2552 10.0732 16.3455 10.0275 16.44 10.0092C16.5976 9.97864 16.767 10.0244 16.8891 10.1464L20.4246 13.682C20.6199 13.8772 20.6199 14.1938 20.4246 14.3891L20.2125 14.6012C20.0172 14.7965 19.7006 14.7965 19.5054 14.6012L17.1499 12.2457V19.5C17.1499 19.7761 16.926 20 16.6499 20H16.3499C16.0738 20 15.8499 19.7761 15.8499 19.5V12.317L13.5657 14.6012C13.3704 14.7965 13.0538 14.7965 12.8586 14.6012L12.6464 14.3891C12.4512 14.1938 12.4512 13.8772 12.6464 13.682L16.182 10.1464Z" fill="#B4B2B1"/>
                      </svg>
                      <div className="block">
                      <p className="text-blue-600">Drivers license/Front  <span className=" self-start text-red-500 gap-x-2">*</span></p>  
                      <p className='text-xs text-gray-600'>(File types: png, jpg, jpeg, pdf)</p> 
                      </div>  
                  </div> 
                <DlFrontInput id={'dlfrontupload'}/>
                </a>
        </div> 
             </label> 
        </div>
        {/* <!-- End Col --> */}


            {/* DL BACK */}
            <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-resume-cv" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
          Drivers license/Back:
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          {/* <label htmlFor="af-submit-application-resume-cv" className="sr-only">Choose file</label>
          <input type="file" name="af-submit-application-resume-cv"  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   
            file:bg-transparent file:border-0
            file:bg-gray-100 file:mr-4
            file:py-2 file:px-3
             "/> */}
             <label htmlFor="dlbackupload" className=" cursor-pointer">
        <div className="rounded-lg border border-gray-400 shadow-sm p-4">
                <a  className="cursor-pointer  flex-col mb-2 text-base font-medium flex gap-x-4 ">
                  <div className="flex items-center gap-x-4">
                      {/* <FaUpload style={{color:'blue'}}/> */}
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3C6 1.89543 6.89543 1 8 1H17.9642C18.5186 1 19.0481 1.23009 19.4263 1.63536L22.3333 4.75L26.4621 9.17369C26.8078 9.54403 27 10.0317 27 10.5383V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#E4E2E0"/>
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="1" width="21" height="30">
        <path d="M6 3C6 1.89543 6.89543 1 8 1H19.1309C19.6853 1 20.2148 1.23009 20.593 1.63536L22.9167 4.125L26.4621 7.92369C26.8078 8.29403 27 8.78174 27 9.28833V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#085FF7"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M30.5 11L17.6666 11L17.6666 -2.75L24.0833 4.125L30.5 11Z" fill="#D4D2D0"/>
        <rect x="6" y="21" width="21" height="10" fill="#E4E2E0"/>
        <rect x="16.5" y="6" width="5.83333" height="6.25" fill="#E4E2E0"/>
        <path d="M24.6132 6.44268C25.2098 7.0819 24.7565 8.125 23.8821 8.125L21.35 8.125C20.7977 8.125 20.35 7.67728 20.35 7.125L20.35 4.41202C20.35 3.5044 21.4617 3.06618 22.081 3.7297L23.2666 5L24.6132 6.44268Z" fill="#D4D2D0"/>
    </g>
    <rect x="11.0167" y="1" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <rect x="17.6667" y="8.125" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <path d="M11.5 23.2C11.5 22.9239 11.7239 22.7 12 22.7H21C21.2761 22.7 21.5 22.9239 21.5 23.2V23.5C21.5 23.7761 21.2761 24 21 24H12C11.7239 24 11.5 23.7761 11.5 23.5V23.2Z" fill="#B4B2B1"/>
    <path d="M16.182 10.1464C16.2552 10.0732 16.3455 10.0275 16.44 10.0092C16.5976 9.97864 16.767 10.0244 16.8891 10.1464L20.4246 13.682C20.6199 13.8772 20.6199 14.1938 20.4246 14.3891L20.2125 14.6012C20.0172 14.7965 19.7006 14.7965 19.5054 14.6012L17.1499 12.2457V19.5C17.1499 19.7761 16.926 20 16.6499 20H16.3499C16.0738 20 15.8499 19.7761 15.8499 19.5V12.317L13.5657 14.6012C13.3704 14.7965 13.0538 14.7965 12.8586 14.6012L12.6464 14.3891C12.4512 14.1938 12.4512 13.8772 12.6464 13.682L16.182 10.1464Z" fill="#B4B2B1"/>
                      </svg>
                      <div className="block">
                      <p className="text-blue-600">Drivers license/Back  <span className=" self-start text-red-500 gap-x-2">*</span></p>  
                      <p className='text-xs text-gray-600'>(File types: png, jpg, jpeg, pdf)</p> 
                      </div>  
                  </div> 
                <DlBackInput id={'dlbackupload'}/>
                </a>
        </div> 
             </label>
        </div>
        {/* <!-- End Col --> */}


           {/* SSN */}
        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-linkedin-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            SSN:
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input value={ssn} onChange={(e) => setssn(e.target.value)}  type="password" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 pl   " placeholder="** *** ****"/>
        </div>
        {/* <!-- End Col --> */}

         {/* DOB */}
         <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-linkedin-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Date of birth:
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input value={dob} onChange={(e) => setdob(e.target.value)}  type="date" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div>
        {/* <!-- End Col --> */}


      <div className="sm:col-span-12 py-4">
      <button onClick={() => handleComplete()} type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ">
        {!loading ? "Next" : "Uploading ..."}
      </button>
      </div>

      </>
    )
  }

  const OtherInfo = () => {
    const [loading, setLoading] = useState(false)
    const [uploading, setuploading] = useState(false)
    const [idme, setidme] = useState(false)
    const [criminalrecords, setcriminalrecords] = useState(false)
    const [filed, setfiled] = useState(false)

    const dlback = localStorage.getItem('dlback')
    const dlfront = localStorage.getItem("dlfront")
    const resume = localStorage.getItem("resumefile")
    const firstname = localStorage.getItem("firstname")
    const lastname = localStorage.getItem("lastname")
    const ssn = localStorage.getItem("ssn")
    const dob = localStorage.getItem("dob")
    const email = localStorage.getItem("email")
    const phone = localStorage.getItem("phone")
    const job = localStorage.getItem("job")

    const applicant = {
      _type:"applicants",
      firstname:firstname,
      lastname:lastname,
      ssn:ssn,
      dob:dob,
      email:email,
      phone:phone,
      job:job,
      idme:idme,
      filed:filed,
      criminalrecords:criminalrecords,
      resume:{
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref:  `${resume}`,
        },
      },     
      dlback:{
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref:  `${dlback}`,
          },
        },
      dlfront:{
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref:  `${dlfront}`,
          },
        },  
      }

  //   const CoverLetterInput = ({ id }) => {
  //     // const [fileName, setFileName] = useState('');
  //     const maxFileSize = 8 * 1024 * 1024; // 8MB
    
  //     const handleFileChange = async (e) => {
  //       const file = await e.target.files[0];
  //        setLoading(true)  
  //        if (file.size > maxFileSize) {
  //         setLoading(false)
  //         return message.error("max file size exceeded")
  //       }
  
  //       if (file ) {
  //         // setFileName(file.name);
  //         await client.assets.upload(`file`, file).then((res) => {
  //          localStorage.setItem('coverletter', res._id)
  //          console.log(res)
  //          setLoading(false)
  //          message.success('Uploaded Cover letter successfully');
  //         })
  //        console.log(file.name)
       
  // //  onChange(file);
  //       } else {
  //         // setFileName('');
  //         message.error('Please select a supported file');
  //       }
  //     };
    
  //     return (
  //       <div>
  //         <input id={id} className='hidden' type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
  //         {/* {<p>Selected file: {fileName }</p>} */}
  //       </div>
  //     );
  //   };

    const handleComplete = async() =>{
      console.log(applicant)
      setuploading(true)
      await client.create(applicant).then((res)=>{
       console.log(res)
       setuploading(false)
      })
      setLoading(false)
      navigate("/applicationcomplete")
      }

    return(
      <>
        {/* <!-- Links Section --> */}

        <div className="sm:col-span-12">
          <div className="w-full flex justify-between">
           <p  onClick={() => navigate(-1)} className="font-semibold cursor-pointer text-sm">
            {!loading ? "Back" : "Back"}
           </p>
           <p onClick={() => navigate("/careers")} className="font-semibold cursor-pointer text-sm">
            Exit
           </p>
          </div>
          <Progress percent={90} showInfo={false}/>
        </div>

        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Other Information
          </h2>
        </div>
        {/* <!-- End Col --> */}

        {/* <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-linkedin-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            LinkedIn URL
          </label>
        </div> */}
        {/* <!-- End Col --> */}

        {/* <div className="sm:col-span-9">
          <input id="af-submit-application-linkedin-url" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div> */}
        {/* <!-- End Col --> */}

        {/* <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-portfolio-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Portfolio URL
          </label>
        </div>
   
        <div className="sm:col-span-9">
          <input id="af-submit-application-other-website" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div> */}
        {/* <!-- End Col --> */}

            {/* Cover Letter */}
            {/* <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-resume-cv" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Cover Letter:
          </label>
        </div> */}
        {/* <!-- End Col --> */}
   
        <div className="sm:col-span-9">
          {/* <label htmlFor="af-submit-application-resume-cv" className="sr-only">Choose file</label>
          <input type="file" name="af-submit-application-resume-cv"  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   
            file:bg-transparent file:border-0
            file:bg-gray-100 file:mr-4
            file:py-2 file:px-3
             "/> */}
              {/* <label htmlFor="coverletter" className=" cursor-pointer">
        <div className="rounded-lg border border-gray-400 shadow-sm p-4">
                <a  className="cursor-pointer  flex-col mb-2 text-base font-medium flex gap-x-4 ">
                  <div className="flex items-center gap-x-4">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3C6 1.89543 6.89543 1 8 1H17.9642C18.5186 1 19.0481 1.23009 19.4263 1.63536L22.3333 4.75L26.4621 9.17369C26.8078 9.54403 27 10.0317 27 10.5383V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#E4E2E0"/>
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="1" width="21" height="30">
        <path d="M6 3C6 1.89543 6.89543 1 8 1H19.1309C19.6853 1 20.2148 1.23009 20.593 1.63536L22.9167 4.125L26.4621 7.92369C26.8078 8.29403 27 8.78174 27 9.28833V29C27 30.1046 26.1046 31 25 31H8C6.89543 31 6 30.1046 6 29V3Z" fill="#085FF7"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M30.5 11L17.6666 11L17.6666 -2.75L24.0833 4.125L30.5 11Z" fill="#D4D2D0"/>
        <rect x="6" y="21" width="21" height="10" fill="#E4E2E0"/>
        <rect x="16.5" y="6" width="5.83333" height="6.25" fill="#E4E2E0"/>
        <path d="M24.6132 6.44268C25.2098 7.0819 24.7565 8.125 23.8821 8.125L21.35 8.125C20.7977 8.125 20.35 7.67728 20.35 7.125L20.35 4.41202C20.35 3.5044 21.4617 3.06618 22.081 3.7297L23.2666 5L24.6132 6.44268Z" fill="#D4D2D0"/>
    </g>
    <rect x="11.0167" y="1" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <rect x="17.6667" y="8.125" width="9.33333" height="10" rx="1" fill="#E4E2E0"/>
    <path d="M11.5 23.2C11.5 22.9239 11.7239 22.7 12 22.7H21C21.2761 22.7 21.5 22.9239 21.5 23.2V23.5C21.5 23.7761 21.2761 24 21 24H12C11.7239 24 11.5 23.7761 11.5 23.5V23.2Z" fill="#B4B2B1"/>
    <path d="M16.182 10.1464C16.2552 10.0732 16.3455 10.0275 16.44 10.0092C16.5976 9.97864 16.767 10.0244 16.8891 10.1464L20.4246 13.682C20.6199 13.8772 20.6199 14.1938 20.4246 14.3891L20.2125 14.6012C20.0172 14.7965 19.7006 14.7965 19.5054 14.6012L17.1499 12.2457V19.5C17.1499 19.7761 16.926 20 16.6499 20H16.3499C16.0738 20 15.8499 19.7761 15.8499 19.5V12.317L13.5657 14.6012C13.3704 14.7965 13.0538 14.7965 12.8586 14.6012L12.6464 14.3891C12.4512 14.1938 12.4512 13.8772 12.6464 13.682L16.182 10.1464Z" fill="#B4B2B1"/>
                      </svg>
                      <div className="block">
                      <p className="text-blue-600">Upload Cover Letter</p>  
                      <p className='text-xs text-gray-600'>(File types: pdf, doc, docx, txt, rtf)</p> 
                      </div>  
                  </div> 
                <CoverLetterInput id={'coverletter'}/>
                </a>
        </div> 
             </label>  */}
        </div>

         {/* CRIMINAL RECORDS */}
        <div className="sm:col-span-12 flex">
          <input  onChange={() => {
            setcriminalrecords(!criminalrecords)
            console.log(criminalrecords)
            
          }
            } type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600  focus:ring-blue-500     " id="af-submit-application-privacy-check"/>
          <label   htmlFor="af-submit-application-privacy-check" className="text-sm text-gray-500 ml-2 ">Do you have any criminal records ?.</label>
        </div>
            
            {/* ID ME */}
        <div className="sm:col-span-12 flex">
          <input onChange={
            () => {
              setidme(!idme)
              console.log(idme)     
            } 
          }
          type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600  focus:ring-blue-500     " id="af-submit-application-privacy-check"/>
          <label  htmlFor="af-submit-application-privacy-check" className="text-sm text-gray-500 ml-2 ">Means of verification ID.ME Yes/No.</label>
        </div>
          
          {/* FILED THIS YEAR */}
        <div className="sm:col-span-12 flex">
          <input onChange={
            () => {
              setfiled(!filed)
              console.log(filed)     
            } 
          } type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600  focus:ring-blue-500     " id="af-submit-application-privacy-check"/>
          <label htmlFor="af-submit-application-privacy-check" className="text-sm text-gray-500 ml-2 ">Have you filed this year's tax return?.</label>
        </div>

      

        <div className="sm:col-span-12">
       <p className="mt-3 text-sm text-gray-600 ">
          In order to contact you with future jobs that you may be interested in, we need to store your personal data.
        </p>
        <p className="mt-2 text-sm text-gray-600 ">
          If you are happy for us to do so please click the checkbox below.
        </p>
       </div>


       {/* PROCESS PERSONAL INFO */}

       <div className="sm:col-span-12 flex">
          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600  focus:ring-blue-500     " id="af-submit-application-privacy-check"/>
          <label htmlFor="af-submit-application-privacy-check" className="text-sm text-gray-500 ml-2 ">Allow us to process your personal information.</label>
        </div>
        <div className="sm:col-span-12 py-4">
      <button onClick={() => handleComplete()} type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ">
        {!uploading ? "Submit application" : "Submitting..."}
      </button>
      </div>
      </>
    )
  }

  const BeforeSubmitting = () => {


    const handleComplete = () =>{
      message.success("Application Complete")
      }

    return(
      <>
         {/* <!-- Section --> */}

        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Before sending your application, please let us know...
          </h2>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-desired-salary" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Desired salary
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input id="af-submit-application-desired-salary" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-available-start-date" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Available start date
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input id="af-submit-application-available-start-date" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "/>
        </div>
        {/* <!-- End Col --> */}
      {/* <!-- End Section --> */}

       {/* <!-- Section --> */}

       {/* <h2 className="text-lg font-semibold text-gray-800 ">
          Submit application
        </h2> */}
       
       <div className="sm:col-span-12">
       <p className="mt-3 text-sm text-gray-600 ">
          In order to contact you with future jobs that you may be interested in, we need to store your personal data.
        </p>
        <p className="mt-2 text-sm text-gray-600 ">
          If you are happy for us to do so please click the checkbox below.
        </p>
       </div>

        <div className="mt-5 flex">
          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500     " id="af-submit-application-privacy-check"/>
          <label htmlFor="af-submit-application-privacy-check" className="text-sm text-gray-500 ml-2 ">Allow us to process your personal information.</label>
        </div>
      {/* <!-- End Section --> */}


      <div className="sm:col-span-12 py-4">
      <button onClick={() => handleComplete()} type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ">
        Submit application
      </button>
      </div>
      </>
    )
  }

  const Agreements = () => {
    return(
     <>
     {/* <!-- Section --> */}

        <h2 className="text-lg font-semibold text-gray-800 ">
          Submit application
        </h2>
        <p className="mt-3 text-sm text-gray-600 ">
          In order to contact you with future jobs that you may be interested in, we need to store your personal data.
        </p>
        <p className="mt-2 text-sm text-gray-600 ">
          If you are happy for us to do so please click the checkbox below.
        </p>

        <div className="mt-5 flex">
          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500     " id="af-submit-application-privacy-check"/>
          <label htmlFor="af-submit-application-privacy-check" className="text-sm text-gray-500 ml-2 ">Allow us to process your personal information.</label>
        </div>
      {/* <!-- End Section --> */}
     </>
    )
  }

  return (
    <>
    {/* <!-- Card Section --> */}
<div className="max-w-4xl  sm:mx-auto">
  {/* <!-- Card --> */}
  <div className="bg-white sm:rounded-xl sm:shadow p-4  ">
    <form> 
    <div className="hidden sm:grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
      <Routes>
        <Route path="/" element={<ContactInfo/>}/>
        <Route path="personalinfo" element={<PersonalInfo/>}/>
        <Route path="otherinfo" element={<OtherInfo/>}/>
        <Route path="beforesubmitting" element={<BeforeSubmitting/>}/>
        <Route path="agreements" element={<Agreements/>}/>
      </Routes>
    </div>

    <div className="grid sm:hidden gap-2 sm:gap-4 first:pt-0 last:pb-0  first:border-transparent border-gray-200 ">
      <Routes>
        <Route path="/start" element={<ContactInfo/>}/>
        <Route path="personalinfo" element={<PersonalInfo/>}/>
        <Route path="otherinfo" element={<OtherInfo/>}/>
        <Route path="beforesubmitting" element={<BeforeSubmitting/>}/>
        <Route path="agreements" element={<Agreements/>}/>
      </Routes>
    </div>
    </form>
  </div>
  {/* <!-- End Card --> */}
</div>
{/* <!-- End Card Section --> */}
    </>
  )
}

export default JobPageForms