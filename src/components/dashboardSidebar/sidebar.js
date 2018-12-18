import React,{Component} from 'react';

//import local scoped style
import styles from './sidebar.module.scss';


//NavItem is returns an anchor tag.
//props determine what classes to use, the path, and the text to show. prop names are:
  // disabled: boolean value. if true, adds the disabled class to the returned anchor tag.
  // path: url path to link to. Will have to read through react-router to see if this needs any changes
  // className: any additional classNames to add to the anchor tag
  // displaytext: the text to display for the anchor tag.
const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search

  //code below checks props to determine which class to use and concats it together
  //requires the space at the end of the string for valid className

  console.log(pageURI)
  let aClassName = "nav-item nav-link text-white " + (props.disabled ? "disabled " : "") + ((props.path === pageURI) ? "bg-primary " : "") + (props.className ? props.className : "")

  return <a href={props.path} className={aClassName}>{props.displaytext}</a>
}

//NavCollapse looks similar to NavItem in that its anchor tag is nearly identical. 
//However, the active className is determined in state, and it also renders a collapsible div right below it. ANy component children are rendered in the collapsible div.
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

    return(
      <div aria-hidden="true" className = "navdrawer navdrawer-permanent-lg ">
        <div className={`navdrawer-content ${styles.darkBg}`}>
          <nav className="navdrawer-nav ">
            <NavItem path="/dashboard" displaytext="Back to dashboard"/>
            <NavItem path="#" displaytext="disabled example" disabled="true"/>
            <NavItem path="/add-new-exhibit" displaytext="Add new exhibit"/>
            {/* link will be to the page where we want the user to navigate */}
            
            <NavCollapse id="collapse1" displaytext="Collapse Example">
              <NavItem path="/add-gallery" displaytext="Add Gallery" className={`pl-4 ${styles.navCollapseChild}`}/>
              <NavItem path="/show-gallery" displaytext="Show Gallery" className={`pl-4 ${styles.navCollapseChild}`}/>
            </NavCollapse>

            <NavItem path="/add-new-user" displaytext="Add new user"/>

            
          </nav>
        </div>
      </div>
    )
  }
}
