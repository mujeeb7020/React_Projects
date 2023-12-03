import React,{useContext,useState} from "react";
import UserContext from '../Context/UserContext';

function Login(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext);

    const handleSubmit=()=>{
        setUser({username,password})

    }
    return(
        <div style={{backgroundColor:"grey",paddingBottom:"7px"}}>
            <h2>Login</h2>
            <input type="text"
            style={{backgroundColor:"blue"}}
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username" />
            {"  "}
            <input type="text"
            style={{backgroundColor:"blue"}}
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleSubmit} style={{backgroundColor:"black",color:"white",marginLeft:"10px",padding:"7px"}}>submit</button>

        </div>
    )
}

export default Login;