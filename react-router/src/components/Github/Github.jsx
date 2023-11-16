import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom'

function Github() {
  const gitdata=useLoaderData()
  // const [gitdata, setGitData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/mujeeb7020')
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setGitData(data)
  //     console.log(data)
  //   })
  
  // },[])
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{gitdata.followers}
    <img src={gitdata.avatar_url} alt="Git picture" width={300} className='rounded-3xl border border-white outline-none' />
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }

export const githubDataLoader=async ()=>{
  const res=await fetch('https://api.github.com/users/mujeeb7020')
  return res
}