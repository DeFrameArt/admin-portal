import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchAdmins} from '../actions/index'
import { Link } from 'react-router-dom';

class WelcomeAdmins extends Component {
  componentDidMount(){
    this.props.fetchAdmins()
    console.log('i m here', "  " , this.props.fetchAdmins())
  }
  renderAdmins(){
    return _.map(this.props.admins, admin =>{
      return(
        <li className="list-group-item" key={admin.id}>
          {admin.id}
          {admin.firstName}{admin.lastName}
          {admin.emailAddress}
          <Link to={"users/id" + admin.id}>Edit</Link>
        </li>
      )
    })
  }
  render(){
    return(
      <div>
        <h3>Active User</h3>
        <ul>
          {this.renderAdmins()}
          {console.log(this.renderAdmins())}
        </ul>
      </div>

    )
  }
}
function mapStateToProps(state){
  console.log(state.admins)
  return{ admins: state.admins}
}
export default connect(mapStateToProps,{fetchAdmins})(WelcomeAdmins)
