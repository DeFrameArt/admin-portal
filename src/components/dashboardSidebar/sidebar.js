import React,{Component} from 'react';

//import local scoped style
import styles from './sidebar.module.scss';

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search

  //code below checks props to determine which class to use and concats it together
  //requires the space at the end of the string for valid className
  let aClassName = "nav-item nav-link text-white " + (props.disabled ? "disabled " : "") + ((props.path === pageURI) ? "bg-primary " : "") + (props.className ? props.className : "")

  return <a href={props.path} className={aClassName}>{props.name}</a>
}

//NavCollapse looks similar to NavItem in that its anchor tag is nearly identical. However, the active className is determined state, and it also renders a collapsible div right below it. ANy component children are rendered in the collapsible div.
class NavCollapse extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }
  onClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    let concatClassName =  "nav-item nav-link text-white " + (this.state.active? "bg-primary " : "") + (this.props.disabled ? "disabled " : "") + (this.props.className? this.props.className : "")
    return(
      <div>
        <a data-toggle="collapse" className={concatClassName} href={`#${this.props.id}`} name={this.props.name} onClick={this.onClick}>{this.props.name}</a>
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
            <NavItem path="/dashboard" name="category 1"/>
            <NavItem path="#" name="category 2" disabled="true"/>
            <NavItem path="#" name="category 3"/>
            {/* link will be to the page where we want the user to navigate */}
            
            <NavCollapse id="collapse1" name="Collapse 1">
              <NavItem path="/dashboard" name="Collapsible 1" className={`pl-4 ${styles.navCollapseChild}`}/>
              <NavItem path="#" name="Collapsible 2" className={`pl-4 ${styles.navCollapseChild}`}/>
            </NavCollapse>
          </nav>
        </div>
      </div>
    )
  }
}
