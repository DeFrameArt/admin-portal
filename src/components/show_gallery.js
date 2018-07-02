import React, { Component } from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';
import '../index.css';
import {fetchGallery} from '../actions/index';
// import { Link } from 'react-router-dom';
class ShowGallery extends Component {
componentDidMount(){
  this.props.fetchGallery()
  console.log('i m here' + "  " + this.props.fetchGallery())

}
  renderGallery(){

    return   _.map(this.props.gallery, gall=>{

      return(
        <li className="list-group-item" key={gall.id}>


          {gall.id}
          {gall.name}
          {gall.featuretype}

          {/* <Link to{"featuretype/" + featuretype.id }>
            <span className="pull-xs-left">edit</span>
          </Link>  */}
        </li>
            )
          })
}
  render(){

    return(
      <div>
        <h3>Gallery</h3>
        <ul>
          {this.renderGallery()}
          {console.log(this.renderGallery())}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  console.log (state)
  return { gallery:state.gallery}
}
export default connect(mapStateToProps, {fetchGallery})(ShowGallery)
