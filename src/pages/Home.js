import React from 'react'
import { useNavigate } from 'react-router-dom'
import withLayout from './withLayout'

function Home() {
  const navigate=useNavigate()
  return (
    <div>
    <div className='banner'>
    <h1>Welcom to my Webpage</h1>
    <p>this is a webpage about my self.
     I love programming and I am willing to teach anyone who wishes to learn </p>
     <div className='action-wrap'>
     <button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
     <button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>


     
     </div>

    </div>
    </div>
  )
}

export default withLayout(Home)