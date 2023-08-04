import { message } from "antd";
import { client } from "../lib/client";


export const HandleSubscribe = async(email:string) => {

//  const subscriber = {
//     _type:"newsletter",
//     email:"email"
//  }

    if (!email ||!email.includes("@") ||!email.includes(".")) {
        return message.error("Please enter a valid email")
    }
    return message.success("Subscribed Succesfully")
}

export const HandleDemo = async (name:string,email:string) => {
    // const subscriber = {
    //     _type:"newsletter",
    //     email:"email"
    //  }

    if (!name || !email) {
        return message.error("Please fill both fields")
    }

    return message.success("Booked a demo!")
}

export const fetchJobs = async (setjobs) => {
const query = `*[_type == "jobs"]`
const jobs = await client.fetch(query).then(res => res)
console.log(jobs)
setjobs(jobs)
return 
}