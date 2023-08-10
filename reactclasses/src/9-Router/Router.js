import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './page/Layout'
import Home from './page/Home'
import Blogs from './page/Blogs'
import Contact from './page/Contact'
import NoPage from './page/NoPage'
import ContactDetail from './page/ContactDetail'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/>
            <Route path="contact/:id" element={<ContactDetail/>}/>
        </Route>      
    </Routes>
    </BrowserRouter>
  )
}

export default Router