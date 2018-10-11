import React,{Component} from 'react';

//import local scoped style
import styles from './dashboard.module.scss';

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search

  //code below checks props to determine which class to use and concats it together
  //requires the space at the end of the string for valid className
  let aClassName = "nav-item nav-link " + (props.disabled ? "disabled " : "") + ((props.path === pageURI) ? "active " : "") + (props.className ? props.className : "")

  //collapsible conditional determines which a tag to output
  let returnVal = props.isCollapse? (
    <a className={aClassName} data-toggle="collapse" href={props.path}>{props.name}</a>
  ) : (
    <a href={props.path} className={aClassName}>{props.name}</a>
  )
  return returnVal
}

export default class Dashboard extends Component {
  render(){

    return(
      <div aria-hidden="true" className = "navdrawer navdrawer-permanent-lg ">
        <div className="navdrawer-content bg-primary">
          <nav className="navdrawer-nav">
            <NavItem path="#" name="category 1"/>
            <NavItem path="#" name="category 2" disabled="true"/>
            <NavItem path="#" name="category 3"/>
            {/* link will be to the page where we want the user to navigate */}
            
            <NavItem isCollapse="true" path="#collapse1" name="Collapse 1"/>
            <div className="collapse" id="collapse1">
              <NavItem path="#" name="Collapsible 1" className="pl-4 text-black-secondary bg-white"/>
              <NavItem path="#" name="Collapsible 2" className="pl-4 text-black-secondary bg-white"/>
            </div>

          </nav>
        </div>
      </div>
    )
  }
}
