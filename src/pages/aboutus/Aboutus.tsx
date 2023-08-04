import { CTA } from "../../components"
import { brian } from "../../assets"
import { Stats } from "."
import {Layout} from "../../components"

type Props = {}

function Aboutus({}: Props) {

  // const Vision = () => {
  //   return(
  //     <>
  //     {/* <!-- Icon Blocks --> */}
  //   <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8  mx-auto">
  //     <div className="max-w-2xl mx-auto">
  //       {/* <!-- Grid --> */}
  //       <div className="grid gap-12">
  //         <div>
  //           <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl ">
  //             Dedicated to providing relief
  //           </h2>
  //           <p className="mt-3 text-gray-800 ">
  //             Imperial grants was put together by our founding team in partnership with undp with one goal in mind. to provide relief to people who need it the most hence why we have a very low credit score qualification bar.
  //           </p>
  //         </div>
  
  //         <div className="space-y-6 lg:space-y-10">
  //           {/* <!-- Icon Block --> */}
  //           <div className="flex">
  //             <svg className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //               <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  //               <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
  //             </svg>
  //             <div className="ml-5 sm:ml-8">
  //               <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
  //                 Home Development Grants
  //               </h3>
  //               {/* <p className="mt-1 text-gray-600 ">
  //                 Our fully furnished spaces are designed and purpose-built with Co-Living in mind, featuring high-end finishes and amenities that go far beyond traditional apartment buildings.
  //               </p> */}
  //             </div>
  //           </div>
  //           {/* <!-- End Icon Block --> */}
  
  //           {/* <!-- Icon Block --> */}
  //           <div className="flex">
  //             <svg className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //               <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
  //             </svg>
  //             <div className="ml-5 sm:ml-8">
  //               <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
  //                 Personal Grants
  //               </h3>
  //               {/* <p className="mt-1 text-gray-600 ">
  //                 Our passion is bringing people together. Beyond creating beautiful spaces, we provide shared experiences.
  //               </p> */}
  //             </div>
  //           </div>
  //           {/* <!-- End Icon Block --> */}
  
  //           {/* <!-- Icon Block --> */}
  //           <div className="flex">
  //           <svg className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 " width="16" height="16"    fill="#000000" viewBox="0 0 100.4 100.4" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M20.4,19.3L32,24.4c-2.3,3.4-3.5,7.3-3.5,11.4c0,11.2,9.1,20.4,20.4,20.4s20.4-9.1,20.4-20.4c0-4-1.2-8-3.4-11.3l10.2-4.8 l0,19.4L73,45.7c-0.2,0.5-0.2,1,0.1,1.4s0.8,0.7,1.3,0.7h5.9c0.5,0,1-0.2,1.2-0.7c0.3-0.4,0.3-0.9,0.1-1.4l-2.7-6.6V18.4 c0-0.8-0.1-1.4-1.5-2C77.1,16.3,49.6,4.1,49.6,4.1c-0.4-0.2-0.8-0.2-1.2,0l-28,12.4c-0.5,0.2-0.9,0.8-0.9,1.4S19.8,19,20.4,19.3z M66.2,35.8c0,9.6-7.8,17.4-17.4,17.4s-17.4-7.8-17.4-17.4c0-3.7,1.2-7.2,3.3-10.2l13.6,6.1c0.2,0.1,0.4,0.1,0.6,0.1s0.4,0,0.6-0.1 l13.4-6C65.1,28.7,66.2,32.2,66.2,35.8z M76.7,44.8l0.7-1.5l0.6,1.5H76.7z M49,7.1l24.3,10.8L49,28.7L24.7,17.9L49,7.1z"></path> <path d="M49.4,59.8C29.9,59.8,14,75.7,14,95.2c0,0.8,0.7,1.5,1.5,1.5h67.8c0.8,0,1.5-0.7,1.5-1.5C84.8,75.7,68.9,59.8,49.4,59.8z M17.1,93.7c0.8-17.2,15-30.9,32.4-30.9S81,76.6,81.8,93.7H17.1z"></path> </g> </g></svg>
  //             <div className="ml-5 sm:ml-8">
  //               <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
  //                 Educational Grants
  //               </h3>
  //               {/* <p className="mt-1 text-gray-600 ">
  //                 We worry about the details so that our residents don't have to. From our online application process to simple, all-inclusive billing we aim to make the living experience as effortless as possible.
  //               </p> */}
  //             </div>
  //           </div>
  //          <div className="block space-y-2">
  //          <h2 className="text-xl text-gray-800 font-bold l">
  //             And Many Others
  //           </h2>
  //           <p className="-mt-2 text-gray-800 ">
  //             Imperial Grants is always growing and constantly involving to expand our reach keep checking back if you qualify for any of our future grants.
  //           </p>
  //          </div>
  //           {/* <!-- End Icon Block --> */}
  //         </div>
  //       </div>
  //       {/* <!-- End Grid --> */}
  //     </div>
  //   </div>
  //   {/* <!-- End Icon Blocks --> */}
  //     </>
  //   )
  // }
  
  
  const Testimonials = () => {
    return(
      <>
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* <!-- Grid --> */}
    <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
      <div className="lg:col-span-5 lg:col-start-1">
        {/* <!-- Title --> */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl ">
            It's all about speed
          </h2>
          <p className="text-gray-600 ">
          Our utmost commitment lies in ensuring that our enterprise grade  products  promptly deliver with exceptional speed. Our diligent efforts enable us to expedite updates to our products, guaranteeing a constantly evolving ecosystem of products.
          </p>
        </div>
        {/* <!-- End Title --> */}
  
        {/* <!-- Blockquote --> */}
        <blockquote className="relative">
          <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
          </svg>
  
          <div className="relative z-10">
            <p className="text-xl italic text-gray-800 ">
              Amazing people to work with. Very fast and professional partner.
            </p>
          </div>
  
          <footer className="mt-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8 rounded-full" src={brian} alt="Image Description"/>
              </div>
              <div className="grow ml-4">
                <div className="font-semibold text-gray-800 ">Brian Hansen</div>
                <div className="text-xs text-gray-500">Recruiting | Airbnb</div>
              </div>
            </div>
          </footer>
        </blockquote>
        {/* <!-- End Blockquote --> */}
      </div>
      {/* <!-- End Col --> */}
  
      <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
        <div className="space-y-6 sm:space-y-8">
          {/* <!-- List --> */}
          <ul className="grid grid-cols-2 divide-y divide-x-2 divide-gray-200 overflow-hidden ">
            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
              <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                45k+
              </div>
              <p className="text-sm sm:text-base text-gray-600 ">
                users - from new startups to public companies
              </p>
            </li>
  
            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
              <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                <svg className="w-4 h-4 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor"/>
                </svg>
                23%
              </div>
              <p className="text-sm sm:text-base text-gray-600 ">
                increase in traffic on webpages with Looms
              </p>
            </li>
  
            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
              <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                <svg className="w-4 h-4 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor"/>
                </svg>
                9.3%
              </div>
              <p className="text-sm sm:text-base text-gray-600 ">
                boost in reply rates across sales outreach
              </p>
            </li>
  
            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
              <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                2x
              </div>
              <p className="text-sm sm:text-base text-gray-600 ">
                faster than previous Axis versions
              </p>
            </li>
          </ul>
          {/* <!-- End List --> */}
        </div>
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
  </div>
  {/* <!-- End Testimonials with Stats --> */}
      </>
    )
  }
  return (
    <> 
    <Layout>
<div className="py-10">
  <div className="container mx-auto px-6 md:px-12">
    <div className="mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800  md:text-4xl">
        Chrome Axis leadership
      </h2>
      <p className="text-center text-gray-600  lg:mx-auto lg:w-8/12">
        Chrome Axis prides itself not only on award-winning technology, but also on the talent of its
        people of some of the brightest minds and most experienced executives in business.
      </p>
    </div>
    <div className="grid gap-12 md:grid-cols-3">
      <div className="space-y-6 text-center">
        <img
          className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div>
          <h4 className="text-2xl text-gray-700 ">Marcos Halman</h4>
          <span className="block text-sm text-gray-500">CEO-Founder</span>
        </div>
        {/* <div className="flex justify-center space-x-4 text-gray-500">
          <a href="#" target="_blank" aria-label="facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </a>
        </div> */}
      </div>
      <div className="space-y-6 text-center">
        <img
          className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
          src="https://images.unsplash.com/photo-1611682060578-6b6a5f33aa48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvdHJhaXQlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="woman"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 className="text-2xl text-gray-700 ">Anabelle Doe</h4>
          <span className="block text-sm text-gray-500">Chief Operations Officer</span>
        </div>
        {/* <div className="flex justify-center space-x-4 text-gray-500">
          <a href="#" target="_blank" aria-label="facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </a>
        </div> */}
      </div>
      <div className="space-y-6 text-center">
        <img
          className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
          src="https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXQlMjBidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="man"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 className="text-2xl text-gray-700 ">Jonathan Calckur</h4>
          <span className="block text-sm text-gray-500">Chief Technical Officer</span>
        </div>
        {/* <div className="flex justify-center space-x-4 text-gray-500">
          <a href="#" target="_blank" aria-label="facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 hover:text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  </div>
</div>
{/* <Vision/> */}
<Testimonials/>
<Stats/>
<CTA/>                                 
    </Layout>
    </>
  )
}

export default Aboutus