import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    let navigate  = useNavigate();
    let {username} = useParams();
  return (
    <div>This is a Profile Page FOR { username }! 
        <button 
        onClick={() => {
            navigate("/about");
        }}> {" "} Change to about page</button></div>
  )
}

export default Profile