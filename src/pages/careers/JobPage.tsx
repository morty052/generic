import { useParams,} from "react-router-dom"
import { JobOverview, JobPageForms } from "."
import { client } from "../../lib/client"
import { useState, useEffect } from "react"
import { Faq, Footer, Navbar } from "../../components"

type Props = {}

function JobPage({}: Props) {
  const id = useParams().id
  const [job, setjob] = useState([])

  const fetchjob = async() => {
  const query = `*[_type == "jobs" && _id == "${id}"]`
  const job = await client.fetch(query).then(res => res)
  setjob(job?.[0])
  localStorage.setItem("job", job?.[0]?.jobtitle)
  console.log(job)
  }

  useEffect(() => {
   fetchjob()
  }, [])
  
  if (job.length < 1) {
    return null
  }

  return (
    <>
    <Navbar/>
    {/* <div className="hidden sm:block w-full">
      <h3 className="font-semibold">
        Applying For {job?.[0].jobtitle}
      </h3>
    </div> */}
    <div className="flex-w-full">
      <div className=" flex flex-col-reverse max-w-6xl sm:container sm:mx-auto sm:grid sm:grid-cols-12  sm:items-center py-8 sm:gap-x-2 md:px-2 lg:gap-x-6">
     <div className="block col-span-6 lg:col-span-7">
     <JobPageForms/>
     </div>
     <div className=" sm:block col-span-6 lg:col-span-5 sm:sticky sm:top-0">
     <JobOverview activeJob={job} />
     </div>
    </div>
    </div>
    <div className="hidden sm:block">
    <Faq/>
    <Footer/>
    </div>
    </>
  )
}

export default JobPage