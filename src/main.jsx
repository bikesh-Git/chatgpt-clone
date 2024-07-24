import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import Homepage from './routes/homepage/Homepage.jsx'
import Chatpage from './routes/chatpage/Chatpage.jsx'
import RootLayout from './layout/rootLayout/RootLayout.jsx'
import { SignIn, SignUp } from '@clerk/clerk-react'
import DashboardLayout from './layout/dashboardLayout/DashboardLayout.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {  path: "/", element: <Homepage />,},
      { path: "/sign-in/*", element: <SignIn /> },
      { path: "/sign-up/*", element: <SignUp /> },

      {
        path: "/", element: <DashboardLayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "dashboard/chats/:id", element: <Chatpage /> }
        ]
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
