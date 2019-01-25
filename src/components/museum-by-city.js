import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {getMuseumByCity} from '../actions/index.js';
import {connect} from 'react-redux';

class MuseumByCity extends Component{
    renderField(field){
        return(
            <div>
                <input 
                {...field.input}
                type= {field.type}
                placeholder ={field.placeholder}
                />
            </div>
        )
    }
    onSubmit(values){
        this.props.getMuseumByCity(values)
    }
    render(){
        const{ handleSubmit } = this.props
        return(
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))} >
            <Field 
            name ="city"
            component ={this.renderField}
            type="city"
            placeholder =" INSERT CITY"
            />           
            <button type="submit" > Submit </button><hr />
 
            </form>
        )
    }
    
}
export default reduxForm({
    form:'Museums'
})(connect (null,{getMuseumByCity})(MuseumByCity))
