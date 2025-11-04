import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/navbar/HERO/hero.jsx'
import Menue from './components/MOVIE-MENUE/movie-menue.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import { Gives } from './store/store.jsx'
import Detail from "./components/details/details.jsx";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        index:true,
        element:(
          <>
          <Hero/>
         <Menue/>
          </>
        )
      },
      {
        path:"/details",
        element:<Detail/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gives>
    <RouterProvider router={router}></RouterProvider>
    </Gives>
  </StrictMode>,
)
