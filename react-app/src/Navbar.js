import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
export default function Navbar() {
  return (
<nav className="nav">
    <Link to="/" className="site-title"> Site Name</Link>
    <ul>
       <Customlink to="/pricing">Pricing</Customlink>
       <Customlink to="/about">About</Customlink>
    </ul>
</nav>
  )
}

function Customlink({to ,children, ...props}) {
const resolvePath = useResolvedPath(to)
const isActive = useMatch({path: resolvePath.pathname, end:true})

return (
<li className={isActive ? "active" : ""}>
  
  <Link to={to} {...props}> {children}</Link> 

</li>

)

}

