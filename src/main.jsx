import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Create from './pages/Create.jsx'
import Report from './pages/Report.jsx'
import Manage from './pages/Manage.jsx'
import NotFound from './pages/NotFound.jsx'
import NewsContextProvider from './context/NewsContextProvider.jsx'
import PreviewPage from './PreviewPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/create',
        element: (
          <Create />
        )
      },
      {
        path: '/report',
        element: (
          <Report />
        )
      },
      {
        path: '/manage',
        element: (
          <Manage />
        )
      },
      {
        path: '*',
        element: (
          <NotFound />
        )
      },
    ],
  },
  {
    path: '/preview',
    element: <PreviewPage />,      
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <NewsContextProvider>
    <RouterProvider router={router}/>
  </NewsContextProvider>,
)
