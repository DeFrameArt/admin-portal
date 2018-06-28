import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../index.css';
import {createGallery} from '../actions/index';
// create action-creator form gallery post request;

class AddNewGallery extends Component{
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
    onSubmit(values){
      this.props.createGallery(values)
      console.log(values)
    }
    render(){
      const {handleSubmit} = this.props
      return(
        <div className="container d-flex align-items-md-center justify-content-center">

          {/* <h3> Galllery Information </h3> */}
          <form onSubmit ={ handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name = "gallery_name"
              component= {this.renderField}
              type="text"
              placeholder = "Gallery name"
            />
            <Field
              name="gallery_description"
              component={this.renderField}
              type="text"
              placeholder="Gallery Description"
            />
            <Field
              label = "Main Image"
              name="main_image"
              component={this.renderField}
              type="file"
            placeholder="upload file" />
              <button type="submit" className ="mt-5 btn btn-block form-btn">Save</button>
              <button type="reset" className ="mt-5 btn btn-block form-btn">Cancel</button>
              </form>

            </div>
            )}}
            export default reduxForm({
              form:'NewGallery',
         })(connect (null,{createGallery})(AddNewGallery))
