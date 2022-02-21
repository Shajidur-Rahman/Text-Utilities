import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {


  function textMode() {
    let textmode = "dark"


    if (props.mode === "dark") {
      textmode = "light"
      return textmode;
    }


    else {
      return textmode;
    }

  }


  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            <div className='mx-4'>
              <input type="color" id="head" name="head"
                value="#e66465" />
              <label for="head">Color</label>
            </div>

            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
            <div className={`form-check form-switch text-${textMode()}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

Navbar.propTypes = { title: PropTypes.string }

Navbar.defaultProps = {
  title: "Set title",
  aboutText: " Set about text "
}