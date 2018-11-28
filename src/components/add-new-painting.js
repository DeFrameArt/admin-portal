import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { createPainting } from '../actions/index';
import DropdownList from 'react-widgets/lib/DropdownList'
import '../index.css';
import MuseumFeatureImage from './museum_featureImage.js'



const galleries = [ { gallery: "European", value: 'european' },
  { gallery: 'Contemporary', value: 'contemporary' },
  { gallery: 'American', value: 'american' } ]

class AddNewPainting extends Component{

  renderField(field){
    return(
      <div>
        <label>{field.label}</label>
        <input
          className="form-control form-input"
          {...field.input}
          type={field.type}
          placeholder = {field.placeholder}
        />
      </div>
    )
  }

 renderDropdownList(field){
    return(
  <DropdownList {...field.input}
    data={field.data}
    valueField={field.valueField}
    textField={field.textField}

    onChange={field.input.onChange}
    placeholder = {field.placeholder}

  />

)
  }

  onSubmit(values){
    // instead of createUser have to use new action creator for this create request
    this.props.createPainting(values)
    console.log(values)
  }
  render(){
    const {handleSubmit} = this.props
    return(
      <div className="container d-flex align-items-md-center justify-content-center">
        {/* // <h2>Exhibit information</h2> */}
        <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label = "PAINTING Name"
            name="painting_name"
            component={this.renderField}
            type="text"
            placeholder="Painting Name"
          />
          <Field
            name="gallery"
            component={this.renderDropdownList}
            data={galleries}
            valueField="value"
            textField="gallery"
            placeholder="Gallery"
          />
          <Field
            name="painting_information"
            component={this.renderField}
            type="text"
            placeholder="Painting Information"
          />
          <Field
            label = "Main Image"
            name="upload_file"
            component={this.renderField}
            type="file"
            placeholder="Uplaod file"
          />
          <button type="submit" className ="mt-5 btn btn-block form-btn">Save</button>
          <button type="reset" className ="mt-5 btn btn-block form-btn">Cancel</button>
        </form>
      </div>

    )
  }
}
function validate(values){
  const errors = {};
  if(!values.painting_name){
    errors.painting_name="Enter the name"
  }
  if(!values.gallery){
    errors.gallery="select from the dropdown menu"
  }
  // can enter more errors of the remaining field
}
export default reduxForm({
  form:'NewPainting',
  validate,
})(connect (null,{createPainting})(AddNewPainting))
