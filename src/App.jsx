import React from 'react'
import ROUTES from './index.routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(ROUTES)
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
