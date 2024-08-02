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

} from "react-router-dom";
import TherapistPage from './Final/TherapistPage.jsx'
import Dream from './Final/Dream.jsx'
import Detox from './Final/Detox.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
     
      <Route path='/' element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="book-session" element={<TherapistPage />} />
        <Route path="dream-analyzer" element={<Dream />} />
        <Route path="digital-detox" element={<Detox />} />
      </Route>
  

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <RouterProvider router={router} />
  </React.StrictMode>,
)