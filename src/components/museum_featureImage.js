import React, {Component} from 'react';
import {connect} from 'react-redux';
import {galleryFeatureImages} from '../actions/index';
 // import {Link} from 'react-router-dom';
import _ from 'lodash';

class MuseumFeatureImage extends Component{
componentDidMount(){
  this.props.galleryFeatureImages()
  console.log( 'this is featuredimages' + "  " +galleryFeatureImages() )
}

renderfeatureImages(){
  return _.map(this.props.featureimages, featureimage=>{

    return(

  <li className="list-group-item" key={featureimage.id}>

    {featureimage.name}
  </li>

    )
  })
}
render(){
  return(
    <div>
      <h3>MUSEUM ___ ___</h3>
      <ul className="list-group-item">
        {this.renderfeatureImages()}
        {console.log(this.renderfeatureImages())}
      </ul>
    </div>
  )
}
}
function mapStateToProps(state){
  console.log(state.featureimages)
  return{
    featureimages: state.featureimages
  }
}
export default connect(mapStateToProps, {galleryFeatureImages})(MuseumFeatureImage)
