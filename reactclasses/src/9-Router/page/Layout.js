import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

    let activeStyle ={
        backgroundColor:"black",
        color:"white"
    }
  return (
    <>
    <div>Layout</div>

    {/* <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>  */}

    <nav>
        <ul>
            <li>
                <NavLink style={({isActive})=> isActive ? activeStyle: undefined} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink style={({isActive})=> isActive ? activeStyle: undefined} to="/blogs">Blogs</NavLink>
            </li>
            <li>
                <NavLink style={({isActive})=> isActive ? activeStyle: undefined} to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav> 
    <Outlet/>
    </>
  )
}

export default Layout