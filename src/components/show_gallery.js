import React, { Component } from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';
import '../index.css';
import {fetchGallery} from '../actions/index';
// import { Link } from 'react-router-dom';
class ShowGallery extends Component {
componentDidMount(){
  this.props.fetchGallery()
  console.log('i m here')

}
  renderGallery(){

    return  _.map(this.props.gallery, gallery=>{

      return(
        <li className="list-group-item" key={gallery.id}>

          {gallery}
          {gallery.id}
          {gallery.name}
          {gallery.featuretype}

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
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return { gallery:state.gallery}
}
export default connect(mapStateToProps, {fetchGallery})(ShowGallery)
