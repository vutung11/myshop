import React from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/about' >About</Link>
                </li>
                <li>
                    <Link to='/content' >Content</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigate