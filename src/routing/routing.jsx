// import React from 'react'
// import {Routes, Route} from "react-router-dom"
// import About from "../components/Dashboard"
// import Skills from "../components/Skills"
// import Projects from '../components/Projects'
// import Experience from '../components/Experience'
// import Certificates from '../components/Certificates'
// import Contact from '../components/Contact'
// import MoreAboutMe from '../components/MoreAboutMe'

// const routing = () => {
//   return (
//     <div>
//         <Routes>
//             <Route path='/about' element={<About/>} />
//             <Route path='/skills' element={<Skills/>} />
//             <Route path='/projects' element={<Projects/>} />
//             <Route path='/experience' element={<Experience/>} />
//             <Route path='/certificates' element={<Certificates/>} />
//             <Route path='/contact' element={<Contact/>} />
//             <Route path='/moreAboutMe' element={<MoreAboutMe/>} />
//         </Routes>
//     </div>
//   )
// }

// export default routing


import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from "../components/HomePage"
import MoreAboutMe from '../components/MoreAboutMe'

const routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/moreAboutMe' element={<MoreAboutMe/>} />
        </Routes>
    </div>
  )
}

export default routing
