import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Employee</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <Link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
                <Link to="/adduser" class="nav-link" href="#">Add</Link>
            </li>
            <li class="nav-item">
                <Link to="/update" class="nav-link" href="#">Update</Link>
            </li>
            </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbar