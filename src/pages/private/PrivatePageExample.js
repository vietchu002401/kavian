import React from "react"
import {removeToken} from "../../utils/auth";
import {Link, useNavigate} from "react-router-dom";

const PrivatePageExample = ()=>{
    const navigate = useNavigate()
    const handleLogout = ()=>{
        removeToken()
        navigate({
            pathname : "/login"
        })
    }
    return (
        <div>
            <p>only accept after login</p>
            <Link to="/admin/desk">to page 2</Link><br/><br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default PrivatePageExample;