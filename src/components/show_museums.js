import React, { Component } from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';
// import '../index.css';
import {fetchMuseums} from '../actions/index';

// import { Link } from 'react-router-dom';
class ShowMuseums extends Component {
componentDidMount(){
   this.props.fetchMuseums()
}
  render(){

    const { museums } = this.props

    return(
      <div>
        <h3>Museums</h3>
        <ul>
          { museums ? _.map(museums, museum => {
            return <li>{museum.name}</li>
          }) : null}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  console.log ('this is state', state)
  return { museums: state.museums}
}
export default connect(mapStateToProps, { fetchMuseums })(ShowMuseums)
