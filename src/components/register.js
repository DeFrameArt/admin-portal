import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { createUser } from '../actions/index';
import * as EmailValidator from 'email-validator';
import '../index.css';

class RegisterForm extends Component{
  renderField(field){
    const { meta : { touched, error } } =field
    // const className =`form-group ${field.meta.touched && field.meta.error ?'has-danger': ''}`
    //above is the className before destructing.
    const className =`form-group ${touched && error ?'has-danger': ''}`
    return(
      <div className="">
        <div className= {className} >
          {/* <label>{field.label}</label> */}
          <input
            className="form-control form-input"
            {...field.input}
            type={ field.type }
            placeholder={field.placeholder}
          />
          <div className="text-help">
            {/*  this className text-help will work with class has-danger so that the text also apper red*/}
            {touched ? error: ''}
          </div>
        </div>
      </div>
        )
  }
  onSubmit(values){
    this.props.createUser(values)
    console.log(values)
      }


render(){
  const{ handleSubmit } = this.props
  return(
    <div class="container d-flex align-items-md-center justify-content-center">
      <div class="login-form col-md-12 col-lg-4 ">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Email"
            name ="email"
            component={this.renderField}
            type="email"
            placeholder="Insert email"
          />
          <Field
            label="Password"
            name ="password"
            component={this.renderField}
            type="password"
            placeholder="Password"
          />
          <Field
            label="Confirm-Password"
            name ="password_confirm"
            component={this.renderField}
            type="password"
            placeholder="Confirm password"
          />
          <button type="submit" className="mt-5 btn btn-block form-btn" > Register </button>
        </form>
      </div>
    </div>
  )
}

}

function validate(values){
const errors = {};
//Validate the inputs from 'values'
if(!EmailValidator.validate(values.email)){
  errors.email="Email is not valid"
}
if(!values.password ||values.password.length<6){
  errors.password="Password Should be 6 chahracter"
}
if( values.password_confirm !== values.password){
  errors.password_confirm="Password doesnot match"
}
// // if(!values.password || values.password.length<10){
// //   errors.password="Password doesnot match"
// // }we can add [password setting also if we want]
return errors
}
export default reduxForm({
  form:'SignupForm',
  validate,
})(connect (null,{createUser})(RegisterForm))