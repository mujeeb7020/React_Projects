import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
 
    if(!user) return <div style={{backgroundColor:"purple"}}>Please Login</div>

   return <div>welcome {user.username}</div>
}

export default Profile