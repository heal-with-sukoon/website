import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './Final/HomePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Router,
} from "react-router-dom";
import TherapistPage from './Final/TherapistPage.jsx'
import ScrollToTop from './scrollToTop.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
     
      <Route path='/' element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="therapists" element={<TherapistPage />} />
      </Route>
  

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <RouterProvider router={router} />
  </React.StrictMode>,
)