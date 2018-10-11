import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import { loginUser} from '../../actions';
import {connect} from 'react-redux';

//import stylesheet
import styles from './login-form.module.scss';


class LoginForm extends Component{
  renderField(field){
    const { meta : { touched, error } } =field
    // const className =`form-group ${field.meta.touched && field.meta.error ?'has-danger': ''}`
    //above is the className before destructing.
    const className =`form-group ${touched && error ? "color:blue;" : ''}`
    return(
      <div className= {className}>

        <input
          className={`form-control ${styles.input}`}
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
    <div className={`fluid-container d-flex align-items-md-center justify-content-center ${styles.container}`}>
      <div className={`${styles.form} col-md-12 col-lg-3`}>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name ="email"
            component={this.renderField}
            type="email"
            placeholder="Insert email"
          />
          <Field
            name ="password"
            component={this.renderField}
            type="password"
            placeholder="Password"
          />
          <button type="submit" className = {`btn btn-block ${styles.btn}`}> Submit </button><hr />
          <Link to="/register" className = {`btn btn-block ${styles.btn}`}>Register</Link>
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
  errors.password="Password is not valid"
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
