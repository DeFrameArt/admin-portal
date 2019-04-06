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
            {/* {
              "acronym": "string",
              "bannerUrl": "string",
              "city": "string",
              "country": "string",
              "id": 0,
              "lat": 0,
              "lng": 0,
              "logoUrl": "string",
              "name": "string",
              "priceDetails": "string",
              "state": "string",
              "street": "string",
              "timingDetails": "string",
              "zip": "string"
            } */}
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
                  <Field
                    name="timingDetails"
                    component={this.renderField}
                    type="text"
                    placeholder="Museum times open"
                  />
                  <h3>Address</h3>
                  <Field
                    name = "street"
                    component= {this.renderField}
                    type="text"
                    placeholder = "Address"
                  />
                  <Field
                    name = "city"
                    component= {this.renderField}
                    type="text"
                    placeholder = "City"
                  />
                  <Field
                    name = "state"
                    component= {this.renderField}
                    type="text"
                    placeholder = "State"
                  />
                  <Field
                    name = "zip"
                    component= {this.renderField}
                    type="text"
                    placeholder = "ZIP"
                  />
                  <Field
                    name = "country"
                    component= {this.renderField}
                    type="text"
                    placeholder = "Country"
                  />
                  <Field
                    name = "lat"
                    component= {this.renderField}
                    type="text"
                    placeholder = "Latitude"
                  />
                  <Field
                    name = "long"
                    component= {this.renderField}
                    type="text"
                    placeholder = "Longitude"
                  />
                  <h3>Media</h3>
                  <Field
                    name="bannerUrl"
                    component={this.renderField}
                    type="text"
                    placeholder="Banner image URL"
                  />
                  <Field
                    name="logoUrl"
                    component={this.renderField}
                    type="text"
                    placeholder="Logo URL"
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
