import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createMuseum} from '../actions/index';
// create action-creator form gallery post request;

class AddNewMuseum extends Component{
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
      this.props.createMuseum(values)
      console.log(values)
    }
    render(){
      const {handleSubmit} = this.props
      return(
        <div className="container">
          <div className="row">
            <div className="col">
                <h2> Museum Information </h2>
                <form onSubmit ={ handleSubmit(this.onSubmit.bind(this))}>
                  <Field
                    name = "name"
                    component= {this.renderField}
                    type="text"
                    placeholder = "Museum Name"
                  />
                  <Field
                    name = "acronym"
                    component= {this.renderField}
                    type="text"
                    placeholder = "Museum Acronym"
                  />
                  <Field
                    name="priceDetails"
                    component={this.renderField}
                    type="text"
                    placeholder="Museum information"
                  />
                  <button type="submit" className ="mt-5 btn form-btn">Save</button>
                  <button type="reset" className ="mt-5 btn form-btn">Cancel</button>
                    </form>
            
            </div>
          </div>

      </div>
      )}}
      export default reduxForm({
        form:'NewGallery',
    })(connect (null,{createMuseum})(AddNewMuseum))
