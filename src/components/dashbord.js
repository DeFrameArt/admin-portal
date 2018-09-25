import React,{Component} from 'react';
import '../index.css';
const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item"
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"

  return(
    <li className={liClassName}  >
      <a href = {props.path} className={aClassName} >
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>):''}
      </a>
    </li>
  )
}
class NavDropdown extends Component {
  constructor(props){
    super(props)
    this.state={
      isToggleOn: false
    }
  }
  showDropdown(e) {
    e.preventDefault()
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }))
  }
render(){
  const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? 'show' : '')
  return(
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false"
        onClick={(e) => {this.showDropdown(e)}}>
        {this.props.name}
      </a>
      <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
        {this.props.children}
      </div>
    </li>
  )
}
}

export default class Dashboard extends Component {
  render(){
    const sidebarStyle = {
      position: 'absolute',
      width: '230px',
      height: '100%',
      background: '#2A3F54',
      // zIndex: 9999,
      display: 'flex'
    }

    return(

        <nav  className = "navbar navbar-expand-lg navbar-light bg-light " style= {sidebarStyle}>
          <a className = "navbar-brand" href="/">AdminPortal</a>
          <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" style= {{flexDirection: 'column', justifyContent: 'space-between'}} >
              <NavItem path="/" name="category 1"/>
              <NavItem path="/" name="category 2"/>
              <NavItem path="/" name="category 3" disabled="true"/>
              {/* link will be to the page where we want the user to navigate */}
              <NavDropdown name="Dropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
                {/* link will be to the page where we want the user to navigate */}
              </NavDropdown>
              <NavDropdown name="Dropdown1">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
                {/* link will be to the page where we want the user to navigate */}
              </NavDropdown>
            </ul>
          </div>
        </nav>
    )
  }
}
