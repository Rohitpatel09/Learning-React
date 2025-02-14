import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './Components/CreatePost.jsx'
import PostList from './Components/PostList.jsx'
import Post from './Components/Post.jsx'
import Loader from './Components/Loader.jsx'
import Login from './Components/Login.jsx'
import Header from './Components/Header.jsx'
import Sidebar from './Components/Siderbar.jsx'
const router=createBrowserRouter([
{path:"/", element:<App/>},
 
  {path:"/lol", element:<Loader></Loader>},
  {path:"/create", element:<CreatePost></CreatePost>},
  {path:"/login", element:<span>
    <Header></Header>
    <Login></Login>
    <Sidebar></Sidebar></span>
 }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
