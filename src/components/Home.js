import React from 'react'
import { Link } from "react-router-dom"

export default  function Home(props) {
  

return(
    <div>
       <h1>Home page</h1>
       <br></br>
       <Link to="/Task">
       <button>Take me to chart page</button>
       </Link>
    </div>
)
}