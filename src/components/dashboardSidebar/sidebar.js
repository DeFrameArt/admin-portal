import React,{Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

//import local scoped style
import styles from './sidebar.module.scss';


//NavItem is returns an react-router NavLink component.
//props determine what classes to use, the path, and the text to show. prop names are: 
  // disabled: boolean value. if true, adds the disabled class to the returned anchor tag.
  // className: any additional classNames to add to the anchor tag
  // displaytext: the text to display for the anchor tag.
const NavItem = props => {
  //code below checks props to determine which class to use and concats it together
  //requires the space at the end of the string for valid className
  let concatClassName = "nav-link text-white " + (props.disabled ? "disabled " : "") + (props.className ? props.className : "")

  return <NavLink {...props} to={`${props.path}`} activeClassName="bg-primary" className={concatClassName}>{props.displaytext}</NavLink>
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
    const { id, displaytext, children, disabled, className } = this.props
    let concatClassName =  `nav-item nav-link text-white ` + (this.state.active? "bg-primary-light " : "") + (disabled ? "disabled " : "") + (className? className : "")
    return(
      <div>
        <a data-toggle="collapse" className={concatClassName} href={`#${id}`} displaytext={displaytext} onClick={this.onClick}>{displaytext}</a>
        <div className="collapse" id={id}>
          {children}
        </div>  
      </div>
    )
  }
}



//completed sidebar component uses components described above to draw the navigation links
// note that that sidebar must be passed to a react-router router component and props.match must be passed to sidebar in order to work properly.
// adding, changing, or deleting sidebar navigation links will require adding/removing NavItem components from render method below.
export default class Sidebar extends Component {
  render(){
    const { match } = this.props
    return(
      <div aria-hidden="true" className = "navdrawer navdrawer-permanent-lg ">
        <div className={`navdrawer-content ${styles.darkBg}`}>
          <nav className="navdrawer-nav ">
            <NavItem exact path={`${match.path}`} displaytext="Home"/>
            <NavItem path="#" displaytext="disabled example" disabled="true"/>
            <NavItem path={`${match.path}/add-new-exhibit`} displaytext="Add new exhibit"/>           
            <NavCollapse id="collapse1" displaytext="Collapse Example">
              <NavItem path={`${match.path}/add-gallery`} displaytext="Add Gallery" className={`pl-4 `}/>
              <NavItem path={`${match.path}/show-gallery`} displaytext="Show Gallery" className={`pl-4 `}/>
            </NavCollapse>
            <NavItem path={`${match.path}/add-new-user`} displaytext="Add new user"/>
          </nav>
        </div>
      </div>
    )
  }
}
