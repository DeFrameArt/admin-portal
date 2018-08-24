import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import { loginUser} from '../actions/index';
import {connect} from 'react-redux';
import '../index.css';


class LoginForm extends Component{
  renderField(field){
    const { meta : { touched, error } } =field
    // const className =`form-group ${field.meta.touched && field.meta.error ?'has-danger': ''}`
    //above is the className before destructing.
    const className =`form-group ${touched && error ? "color:blue;" : ''}`
    return(
      <div className= {className}>
        <label>{field.label}</label>

        <input
          className="form-control"
          {...field.input}
          type={ field.type }
          placeholder={field.placeholder}
        />
        <div className="text-help">
          {/*  this className text-help will work with class has-danger so that the text also apper red*/}
          {touched ? error: ''}
        </div>
      </div>
        )
  }
  onSubmit(values){
    this.props.loginUser(values)

  }
render(){
  const{ handleSubmit } = this.props
  return(
    <div className="container d-flex align-items-md-center justify-content-center">
      <div className="login-form col-md-12 col-lg-4 ">
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
          <button type="submit" className = "mt-5 btn btn-block form-btn"> Submit </button><br /><hr />
          <Link to="/register" className ="mt-5 btn btn-block form-btn">Register</Link>
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
  errors.password="Password Sdoesnot match"
}
// // if(!values.password || values.password.length<10){
// //   errors.password="Password doesnot match"
// // }we can add [password setting also if we want]
return errors
}
export default reduxForm({
  form:'SignInForm',
  validate,
})(connect (null,{loginUser})(LoginForm))
