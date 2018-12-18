import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addUser} from '../actions/index';
import DropdownList from 'react-widgets/lib/DropdownList';

const institutiontypes= [{institution:'name'},
  {institution:'name'}]

class AddNewUser extends Component{
  renderField(field){
    return(
      <div>
        <input
          className="form-control"
          {...field.input}
          type={ field.type }
          placeholder={field.placeholder}
        />
      </div>
    )
  }
  renderDropdownList(field){
    return(
  <DropdownList {...field.input}
    data={field.data}
    // valueField={valueField}
    type={field.type}
    onChange={field.input.onChange}
    placeholder = {field.placeholder}
  />
)
}
  onSubmit(values){
    this.props.addUser(values)
  }
  render(){
    const{ handleSubmit } = this.props
    return(
      <div className="container">
        <h6>User Information</h6>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div >
            <Field
              name="firstname" //check name is same as in backend
              component={this.renderField}
              type="text"
            placeholder=" First name"/>
            <Field
              name="lastname"
              component={this.renderField}
              type="text"
              placeholder=" Last name"
            />
            <Field
              name ="email"
              component={this.renderField}
              type="email"
              placeholder="email@domain.com"
            />
            <Field
              name = "phonenumber"
              component = {this.renderField}
              type= 'tel'
              placeholder="Phone number"
            />
          </div>
          <div >
            <h6> Institution Information </h6>
            <Field
              name="institution name"
              component ={this.renderField}
              type ="textarea"
              placeholder= "Institution name"
            />
            <Field
              name="institution address"
              component ={this.renderField}
              type ="text"
              placeholder= "Institution address"
            />
            <Field
              name="institution type"
              component={this.renderDropdownList}
              data={institutiontypes}
              type ="text"
              placeholder= "Institution Type"
            />
          </div>
          <div className="row">
            <div className="col-6">
              <button type ="submit" className = "mt-5 btn btn-block form-btn"> Save </button>

            </div>
            <div className="col-6">
              <button type="reset" className ="mt-5 btn btn-block form-btn">Cancel</button>

            </div>

          </div>
        </form>
      </div>
        )
        }
}
export default reduxForm({
  form:'AddInUser',
})(connect (null,{addUser})(AddNewUser))
