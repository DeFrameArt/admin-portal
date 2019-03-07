import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { createExhibit } from '../actions/index';
import DropdownList from 'react-widgets/lib/DropdownList'


const colors = [ { color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' } ]

class AddNewExhibit extends Component{

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
    textField='color'
    type={field.type}
    onChange={field.input.onChange}
    placeholder = {field.placeholder}
  />
)
  }
  onSubmit(values){
    // instead of createUser have to use new action creator for this create request
    this.props.createExhibit(values)
    console.log(values)
  }
  render(){
    const {handleSubmit} = this.props
    return(
      <div className="container">
        <div className="row">
          <div className="col">
          
            <h2>Exhibit information</h2>
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label = "Exhibit Name"
            name="exhibit_name"
            component={this.renderField}
            type="text"
            placeholder="Exhibit Name"
          />
          <Field
            name="gallery"
            component={this.renderDropdownList}
            // data will be the option in dropdown
            data={colors}
            type="color"
            placeholder="Gallery"
          />
          <Field
            name="exhibit_information"
            component={this.renderField}
            type="text"
            placeholder="Exhibit Information"
          />
          <Field
            label = "Main Image"
            name="upload_file"
            component={this.renderField}
            type="file"
            placeholder="Uplaod file"
          />
          <button type="submit" className ="mt-5 btn form-btn">Save</button>
          <button type="reset" className ="mt-5 ml-2 btn form-btn">Cancel</button>
        </form>
      
          </div>
        </div>
        
      </div>

    )
  }
}
function validate(values){
  const errors = {};
  if(!values.exhibit_name){
    errors.exhibit_name="Enter the name"
  }
  if(!values.gallery){
    errors.gallery="select from the dropdown menu"
  }
  // can enter more errors of the remaining field
}
export default reduxForm({
  form:'NewExhibit',
  validate,
})(connect (null,{createExhibit})(AddNewExhibit))
