import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Axis, Careers , Aboutus, Login, Pricing, JobPage, ApplicationComplete} from './pages'

// import { Layout } from './components'

function App() {
 

  return(
    <Routes>
      {/* <Route element={<Layout/>}>
      </Route> */}
         <Route path='/' element={<Home/>}/>
         <Route path='/axis' element={<Axis/>}/>
         <Route path='/careers' element={<Careers/>}/>
         <Route path='/aboutus' element={<Aboutus/>}/>
         <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/jobapplication/:id/*' element={<JobPage/>}/>
      <Route path='/applicationcomplete' element={<ApplicationComplete/>}/>
    </Routes>
  )
}

export default App
