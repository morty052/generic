import { useState, useEffect } from "react"
import { client } from "../../lib/client"
import { NavLink } from "react-router-dom"


type Props = {}

function OpenPositions({}: Props) {
const [jobs, setjobs] = useState([])

  const fetchJobs = async () => {
    const query = `*[_type == "jobs"]`
    const jobs = await client.fetch(query).then(res => res)
    console.log(jobs)
    setjobs(jobs)
    }

    useEffect(() => {
     fetchJobs()
    }, [])

    type JobProps = {
      to:string
      title:string,
      location:string
    }

    type jobtypes = {
      _id:string,
      jobtitle:string,
      joblocation:string
    }

    const Card = ({to, title, location}:JobProps) => {
      return (
        <NavLink to={`/jobapplication/${to}`} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition  " >
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="group-hover:text-blue-600 font-semibold text-gray-800  ">
                {title}
              </h3>
              <p className="text-sm text-gray-500">
                {location}
              </p>
            </div>
            <div className="pl-3">
              <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </NavLink>
      )
    }
    
    if (jobs.length < 1) {
      return null
    }

  return (
    // <!-- Card Section -->
<div id="openpositions" className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
    <div className="flex justify-center py-4 sm:py-8">
        <p className="text-2xl sm:text-3xl font-semibold">
            Open positions
        </p>
    </div>
  {/* <!-- Grid --> */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {/* <!-- Card --> */}
   {
    jobs?.map((job:jobtypes, index)=>(
      <Card 
      key={index}
      to={job._id}
      title={job.jobtitle}
      location={job.joblocation}
      />
    ))
   }
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>

  )
}

export default OpenPositions