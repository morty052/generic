import {FaChevronDown, FaChevronUp} from "react-icons/fa"
import {  useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"


type Props = {
    activeJob:any
}

function JobOverview({activeJob}: Props) {

    const navigate = useNavigate()

// const [about, setabout] = useState(true)
const [roles, setroles] = useState(false)
const [qualifications, setqualifications] = useState(false)
// const [responsibilities, setresponsibilities] = useState(false)
const [description, setdescription] = useState(false)

const path = useLocation().pathname

let hidden

if (path.includes("start")) {
    hidden = true
}

if (path.includes("personalinfo")) {
    hidden = true
}

if (path.includes("otherinfo")) {
    hidden = true
}

if (path.includes("beforesubmitting")) {
    hidden = true
}

if (path.includes("agreements")) {
    hidden = true
}

       
        
        return (
          <>
            {
                !hidden &&
            <div className=" px-2 pb-10 sm:px-0 sm:hidden">
              <div className="sm:border sm:p-2 md:p-4 sm:rounded-lg sm:shadow-lg ">
                <div className="sm:container  sm:mx-auto max-w-7xl relative ">
                  {/* job title */}
                  <div className="pb-2 sm:container sm:mx-auto max-w-7xl">
                    <div className="">
                      <h3 className="text-xl  text-blk font-semibold">
                        {activeJob?.jobtitle}
                      </h3>
                      <p className="text-sm text-gray-700 font-semibold">
                        {activeJob?.payrange}
                      </p>
                      <p className="text-sm text-gray-700 font-semibold">
                        {activeJob?.joblocation}
                      </p>
                    </div>
                  </div>
                  {/* {job information} */}
                  <div className=" space-y-2">
                    {/* about Chrome Axis */}
                    <div className="">
                      <div className="flex max-w-[150px] items-center  justify-between ">
                        <h3 className="text-gray-800 font-medium ">
                          About Chrome Axis
                        </h3>
                        {/* {!about ? <FaChevronDown onClick={()=> setabout(!about)} style={{fontSize:"10px"}}/> :<FaChevronUp onClick={()=> setabout(!about)} style={{fontSize:"10px"}}/> } */}
                      </div>
                      <div className="">
                        <p className="text-sm text-blk leading-snug ">
                          Chrome Axis is the modern capital platform built to
                          connect entrepreneurs and business owners to fast,
                          frictionless, dilution-free financing. Chrome Axis works
                          across industries by turning all forms of revenue into
                          up-front capital to help companies improve cash flow,
                          scale operations, and grow on their terms.
                        </p>
                        <p className="text-sm text-blk leading-snug ">
                          We’re a fully distributed, remote-first, fast-growing
                          startup. Our engineering, data science and risk teams
                          are spread from UTC-8 to UTC+6 .
                          {/* and we rely heavily on our written communication
                        skills in order to make it work. We believe in giving our team
                        agency and control over their schedules: we avoid standing
                        meetings, and default to asynchronous communication. There are
                        no core working hours, we just ask our team to communicate
                        clearly about their schedules and be considerate to their
                        coworkers if plans change. You will occasionally need to be
                        flexible in order to meet synchronously with colleagues in
                        different time zones. */}
                        </p>
                      </div>
                    </div>

                    {/* about the role */}
                    <div>
                      <div className="flex items-center justify-between max-w-[150px]  ">
                        <h3 className=" text-blk font-semibold ">
                          About The Role
                        </h3>
                        <div className="hidden sm:block">
                          {!description ? (
                            <FaChevronDown
                              onClick={() => setdescription(!description)}
                              style={{ fontSize: "10px" }}
                            />
                          ) : (
                            <FaChevronUp
                              onClick={() => setdescription(!description)}
                              style={{ fontSize: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      {description && (
                        <p className="text-sm leading-snug">
                          {activeJob?.description}
                        </p>
                      )}

                      <p className="text-sm leading-snug sm:hidden">
                        {activeJob?.description}
                      </p>
                    </div>

                    {/* responsibilities */}
                    <div className="space-y-1">
                      <div className="flex max-w-[150px] items-center  justify-between ">
                        <h3 className=" text-blk font-semibold ">
                          Responsibilities
                        </h3>
                        <div className="hidden sm:block">
                          {!roles ? (
                            <FaChevronDown
                              onClick={() => setroles(!roles)}
                              style={{ fontSize: "10px" }}
                            />
                          ) : (
                            <FaChevronUp
                              onClick={() => setroles(!roles)}
                              style={{ fontSize: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      {roles && (
                        <ol className=" decoration-slate-900 list-disc ">
                          {activeJob?.roles?.map((item) => {
                            return (
                              <li className="text-sm leading-snug">{item}</li>
                            );
                          })}
                        </ol>
                      )}
                      <ol className=" decoration-slate-900 list-disc sm:hidden ">
                        {activeJob?.roles?.map((item) => {
                          return (
                            <li className="text-sm leading-snug">{item}</li>
                          );
                        })}
                      </ol>
                    </div>

                    {/* qualifications */}
                    <div className="space-y-1">
                      <div className="flex max-w-[150px] items-center  justify-between ">
                        <h3 className=" text-blk font-semibold ">
                          Qualifications
                        </h3>
                        <div className="hidden sm:block">
                          {!qualifications ? (
                            <FaChevronDown
                              onClick={() => setqualifications(!qualifications)}
                              style={{ fontSize: "10px" }}
                            />
                          ) : (
                            <FaChevronUp
                              onClick={() => setqualifications(!qualifications)}
                              style={{ fontSize: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      {qualifications && (
                        <ol className="list-disc text-sm leading-snug">
                          {activeJob?.qualifications?.map((item) => {
                            return <li>{item}</li>;
                          })}
                        </ol>
                      )}

                      <ol className="list-disc text-sm leading-snug sm:hidden">
                        {activeJob?.qualifications?.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ol>
                    </div>

                    {/* education */}
                    {activeJob?.education ? (
                      <div className=" space-y-4">
                        <h3 className="text-[28px] text-blk font-semibold sm:text-3xl">
                          Education
                        </h3>
                        <ol className="list-disc space-y-2">
                          {activeJob?.education}
                        </ol>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* <div ref={formRef}>
                    <JobPageForm/>
                    </div> */}
                  </div>
                  <div className="fixed bottom-2 left-0 px-2 w-full sm:col-span-12">
                    <button
                      onClick={() => navigate(`/jobapplication/${activeJob._id}/start`)}
                      type="button"
                      className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                    >
                      Start application
                    </button>
                  </div>
                </div>
              </div>
            </div>
            }



            {/* LARGE SCREEN SECTION */}

            <div className="hidden sm:block px-2 sm:px-0 relative">
              <div className="sm:border sm:p-2 md:p-4 sm:rounded-lg sm:shadow-lg ">
                <div className="sm:container  sm:mx-auto max-w-7xl relative ">
                  {/* job title */}
                  <div className="pb-2 sm:container sm:mx-auto max-w-7xl">
                    <div className="">
                      <h3 className="text-xl  text-blk font-semibold">
                        {activeJob?.jobtitle}
                      </h3>
                      <p className="text-sm text-gray-700 font-semibold">
                        {activeJob?.payrange}
                      </p>
                      <p className="text-sm text-gray-700 font-semibold">
                        {activeJob?.joblocation}
                      </p>
                    </div>
                  </div>
                  {/* {job information} */}
                  <div className=" space-y-2">
                    {/* about Chrome Axis */}
                    <div className="">
                      <div className="flex max-w-[150px] items-center  justify-between ">
                        <h3 className="text-gray-800 font-medium ">
                          About Chrome Axis
                        </h3>
                        {/* {!about ? <FaChevronDown onClick={()=> setabout(!about)} style={{fontSize:"10px"}}/> :<FaChevronUp onClick={()=> setabout(!about)} style={{fontSize:"10px"}}/> } */}
                      </div>
                      <div className="">
                        <p className="text-sm text-blk leading-snug ">
                          Chrome Axis is the modern capital platform built to
                          connect entrepreneurs and business owners to fast,
                          frictionless, dilution-free financing. Chrome Axis works
                          across industries by turning all forms of revenue into
                          up-front capital to help companies improve cash flow,
                          scale operations, and grow on their terms.
                        </p>
                        <p className="text-sm text-blk leading-snug ">
                          We’re a fully distributed, remote-first, fast-growing
                          startup. Our engineering, data science and risk teams
                          are spread from UTC-8 to UTC+6 .
                          {/* and we rely heavily on our written communication
                        skills in order to make it work. We believe in giving our team
                        agency and control over their schedules: we avoid standing
                        meetings, and default to asynchronous communication. There are
                        no core working hours, we just ask our team to communicate
                        clearly about their schedules and be considerate to their
                        coworkers if plans change. You will occasionally need to be
                        flexible in order to meet synchronously with colleagues in
                        different time zones. */}
                        </p>
                      </div>
                    </div>

                    {/* about the role */}
                    <div>
                      <div className="flex items-center justify-between max-w-[150px]  ">
                        <h3 className=" text-blk font-semibold ">
                          About The Role
                        </h3>
                        <div className="hidden sm:block">
                          {!description ? (
                            <FaChevronDown
                              onClick={() => setdescription(!description)}
                              style={{ fontSize: "10px" }}
                            />
                          ) : (
                            <FaChevronUp
                              onClick={() => setdescription(!description)}
                              style={{ fontSize: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      {description && (
                        <p className="text-sm leading-snug">
                          {activeJob?.description}
                        </p>
                      )}

                      <p className="text-sm leading-snug sm:hidden">
                        {activeJob?.description}
                      </p>
                    </div>

                    {/* responsibilities */}
                    <div className="space-y-1">
                      <div className="flex max-w-[150px] items-center  justify-between ">
                        <h3 className=" text-blk font-semibold ">
                          Responsibilities
                        </h3>
                        <div className="hidden sm:block">
                          {!roles ? (
                            <FaChevronDown
                              onClick={() => setroles(!roles)}
                              style={{ fontSize: "10px" }}
                            />
                          ) : (
                            <FaChevronUp
                              onClick={() => setroles(!roles)}
                              style={{ fontSize: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      {roles && (
                        <ol className=" decoration-slate-900 list-disc ">
                          {activeJob?.roles?.map((item) => {
                            return (
                              <li className="text-sm leading-snug">{item}</li>
                            );
                          })}
                        </ol>
                      )}
                      <ol className=" decoration-slate-900 list-disc sm:hidden ">
                        {activeJob?.roles?.map((item) => {
                          return (
                            <li className="text-sm leading-snug">{item}</li>
                          );
                        })}
                      </ol>
                    </div>

                    {/* qualifications */}
                    {/* <div className="space-y-1">
                      <div className="flex max-w-[150px] items-center  justify-between ">
                        <h3 className=" text-blk font-semibold ">
                          Qualifications
                        </h3>
                        <div className="hidden sm:block">
                          {!qualifications ? (
                            <FaChevronDown
                              onClick={() => setqualifications(!qualifications)}
                              style={{ fontSize: "10px" }}
                            />
                          ) : (
                            <FaChevronUp
                              onClick={() => setqualifications(!qualifications)}
                              style={{ fontSize: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                      {qualifications && (
                        <ol className="list-disc text-sm leading-snug">
                          {activeJob?.qualifications?.map((item) => {
                            return <li>{item}</li>;
                          })}
                        </ol>
                      )}

                      <ol className="list-disc text-sm leading-snug sm:hidden">
                        {activeJob?.qualifications?.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ol>
                    </div> */}

                    {/* education */}
                    {activeJob?.education ? (
                      <div className=" space-y-4">
                        <h3 className="text-[28px] text-blk font-semibold sm:text-3xl">
                          Education
                        </h3>
                        <ol className="list-disc space-y-2">
                          {activeJob?.education}
                        </ol>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* <div ref={formRef}>
                    <JobPageForm/>
                    </div> */}
                  </div>
                  <div className="sm:hidden sm:col-span-12 fixed bottom-0">
                    <button
                      onClick={() => navigate(`/jobapplication/${activeJob._id}/start`)}
                      type="button"
                      className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                    >
                      Submit application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
}

export default JobOverview