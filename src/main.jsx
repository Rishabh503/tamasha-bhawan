import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import App from './App.jsx'
import { Hero } from './components/Hero.jsx'
import { Contact } from './components/Contact.jsx'
import { CoursePage } from './components/CoursePage.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/course' element={<CoursePage/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
