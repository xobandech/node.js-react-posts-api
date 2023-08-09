import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBarComponent = () => {
    return (
        <div>

        <div className="flex flex-row items-center justify-around [&>*]:font-bold h-10">
            <Link to="/">Home</Link> {/* Updated to="/" */}
            <Link to="/edit">Edit post</Link>
            <Link to="/add">Add post</Link>
            <Link to="/delete">Delete post</Link>
        </div>
        <Outlet />
        </div>
    );
}

export default NavBarComponent;
