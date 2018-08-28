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

    //featureType is an array of galleries with a unique featureType. this is done by filtering the gallery array, then mapping a new array that contains only the featureType value.

    const featureType = _.filter(this.props.gallery, (gallery, i, array) => {

      //the callback predicate in _.filter returns true if the current gallery.featuretype val != the featuretype val in next element. The callback also returns true for the last element.

      //index is a string value, to check next value i has to be converted to an int.
      if (typeof array[+i+1] == 'undefined' || gallery.featuretype !== array[+i+1].featuretype){
        return true
      }else {
        return false
      }
    }).map(e => e.featuretype)

    return (

      //the .map below creates the heading based on featureType values
      _.map(featureType, type => {

        return(
        <li key={type}>
          {type}
          <ul>
            {/* the function below creates a new array with paintings that have a matching featuretype, then maps it to individual li*/}
            { _.filter(this.props.gallery, {featuretype: type}).map(e => {
             return (
               <li key={e.id}>
                 {e.name}
               </li>
             )
           })}
          </ul>
        </li>)
      })
    )
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
  console.log ('this is state', state)
  return { gallery: state.gallery}
}
export default connect(mapStateToProps, { fetchGallery })(ShowGallery)
