import React, {
    Component
} from 'react';

import {
    getMuseumByCity
} from '../actions/index.js';
import {
    connect
} from 'react-redux';
import _ from 'lodash';

class MuseumByCity extends Component {

    componentDidMount() {
        this.props.getMuseumByCity()
        console.log('i m here' ,"  " ,this.props.getMuseumByCity())
    }
   
    rendergetMuseumByCity(){
       return _.map(this.props.cities, data=> {
            return(
              <li className="list-group-item" key={(data.id)}>
              {console.log(data)}
            <collapse> {(data.city)} </collapse> 
               </li>
               
            )
        })
    }
   
    render() {
        return ( 
            <div >
         <h3>MuseumByCity</h3>
         
                {this.rendergetMuseumByCity()}
             {console.log(this.rendergetMuseumByCity())} 
 
            </div>
        )
    }

}
function mapStateToProps(state){
    console.log(state.cities)
    return{
        cities: state.cities
    }
} 
export default connect(mapStateToProps,{getMuseumByCity})(MuseumByCity)
