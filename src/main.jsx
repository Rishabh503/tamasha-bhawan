import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import App from './App.jsx'
import { Hero } from './components/Hero.jsx'
import { Contact } from './components/Contact.jsx'
import { CoursePage } from './components/CoursePage.jsx'
import About from './components/About.jsx'
import HomePage from './components/DesignTwo.jsx'
import Extra from './components/Extra.jsx'
// import NewAbout from './components/NewAbout.jsx'
import AboutUs from './components/NewAbout.jsx'
import UnderDevelopment from './components/UnderDevelopment.jsx'
import ProductPage from './components/products/Draft.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/course' element={<CoursePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/underDev' element={<UnderDevelopment/>}/>
      
      {/* added for prpoducts  */}


      <Route path='/product' element={<ProductPage/>}/>



      <Route path='/new' element={<HomePage/>}/>
      <Route path='/new2' element={<Extra/>}/>
      <Route path='/newAbout' element={<AboutUs/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
