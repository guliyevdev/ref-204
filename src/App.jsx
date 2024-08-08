import React from 'react'
import ROUTES from './index.routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(ROUTES)
import './assets/css/bootstrap.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/flaticon.css'
import './assets/css/slicknav.css'
import './assets/css/animate.min.css'
import './assets/css/style.css'
import './assets/css/nice-select.css'
import './assets/css/slick.css'

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
