import React,{Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

//import local scoped style
import styles from './sidebar.module.scss';


//NavItem is returns an react-router NavLink component.
//props determine what classes to use, the path, and the text to show. prop names are:  <-- Specs may be changed as react-router is incorporated into component
  // disabled: boolean value. if true, adds the disabled class to the returned anchor tag.
  // path: url path to link to. Will have to read through react-router to see if this needs any changes
  // className: any additional classNames to add to the anchor tag
  // displaytext: the text to display for the anchor tag.
const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search

  //code below checks props to determine which class to use and concats it together
  //requires the space at the end of the string for valid className
  let aClassName = "nav-item nav-link text-white " + (props.disabled ? "disabled " : "") + ((props.path === pageURI) ? "bg-primary " : "") + (props.className ? props.className : "")

  return <NavLink to={`${props.path}`} className={aClassName}>{props.displaytext}</NavLink>
}

//NavCollapse looks similar to NavItem in that its anchor tag is nearly identical. 
//However, the active className is determined in state, and it also renders a collapsible div right below it. Any component children are rendered in the collapsible div.
// TODO convert to react-router NavLinks if possible. Look up how to do collapsibles using react-router
class NavCollapse extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }
  onClick = (e) => {
    e.preventDefault()
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    let concatClassName =  "nav-item nav-link text-white " + (this.state.active? "bg-primary " : "") + (this.props.disabled ? "disabled " : "") + (this.props.className? this.props.className : "")
    return(
      <div>
        <a data-toggle="collapse" className={concatClassName} href={`#${this.props.id}`} displaytext={this.props.displaytext} onClick={this.onClick}>{this.props.displaytext}</a>
        <div className="collapse" id={this.props.id}>
          {this.props.children}
        </div>  
      </div>
    )
  }
}


export default class Sidebar extends Component {
  render(){
    const { match } = this.props
    return(
      <div aria-hidden="true" className = "navdrawer navdrawer-permanent-lg ">
        <div className={`navdrawer-content ${styles.darkBg}`}>
          <nav className="navdrawer-nav ">
            <NavItem path="/dashboard" displaytext="Back to dashboard"/>
            <NavItem path="#" displaytext="disabled example" disabled="true"/>
            <NavItem path={`${match.path}/add-new-exhibit`} displaytext="Add new exhibit"/>           
            <NavCollapse id="collapse1" displaytext="Collapse Example">
              <NavItem path={`${match.path}/add-gallery`} displaytext="Add Gallery" className={`pl-4 ${styles.navCollapseChild}`}/>
              <NavItem path={`${match.path}/show-gallery`} displaytext="Show Gallery" className={`pl-4 ${styles.navCollapseChild}`}/>
            </NavCollapse>

            <NavItem path={`${match.path}/add-new-user`} displaytext="Add new user"/>

            
          </nav>
        </div>
      </div>
    )
  }
}
