import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePageRoute from './pages/home'
import OrderRoute from './pages/order'
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageRoute />
  },
  {
    path: 'order/:id',
    element: <OrderRoute />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
