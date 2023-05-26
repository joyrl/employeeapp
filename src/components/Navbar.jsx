import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="container">
        <h2>Employee App</h2> <br/>
      <di className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
               
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/employee">
                      Employee
                    </Link>
                  </li>
                 </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </di>
    </div>
  )
}

export default Navbar