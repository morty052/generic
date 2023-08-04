import { Footer, Navbar, Faq } from "."
// import { Outlet } from "react-router-dom"

type Props = {
children?:any
}

function Layout({children}: Props) {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto max-w-7xl">
    {children}
    </div>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Layout