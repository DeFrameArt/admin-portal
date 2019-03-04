import axios from 'axios';
import {
  API_CALL
} from '../utils/project_consts';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_EXHIBIT = 'CREATE_EXHIBIT';
export const CREATE_GALLERY = 'CREATE_GALLERY';
export const FETCH_GALLERY = 'FETCH_GALLERY';
export const ADD_USER = 'ADD_USER';
export const FETCH_ADMINS = 'FETCH_ADMINS'
export const FEATURE_IMAGES = 'FEATURE_IMAGES';
export const MUSEUM_BY_CITY = 'MUSEUM_BY_CITY';
export const GET_ERRORS = 'GET_ERRORS';

export function createUser(values) {
  return (dispatch) => {
    debugger
    const request = axios.post(API_CALL + '/accounts/register', values)
    request.then((response) => {
      dispatch({
        type: CREATE_USER,
        payload: values
      })
      if (response.statusText === "OK") {
        window.location.href = `/login`;
        console.log("values" + response)

      }
    })
  }
}
export function loginUser(values) {
  const request = axios.post(API_CALL + '/accounts/login', values)
  debugger;
  // console.log('debugger start1');
  return (dispatch) => {
    request.then((values) => {
      dispatch({
        type: LOGIN_USER,
        payload: values,
      })
      if (values.statusText === "OK") {
        console.log(values)
        window.location.href = `/dashboard`;
        console.log("values" + values)
      }
    });
  }
}




export function galleryFeatureImages() {
  const request = axios.get(API_CALL + '/museums/1/featuredimages')
  return (dispatch) => {
    request.then(({
      data
    }) => {
      console.log(data)
      dispatch({
        type: FEATURE_IMAGES,
        payload: data
      })
    })
  }
}
//createExhibit is add painting
export function createExhibit(values) {
  const request = axios.post('', values)
  return (dispatch) => {
    request.then(() => {
      dispatch({
        type: CREATE_EXHIBIT,
        payload: values
      })
    })
  }
}
export function createGallery(values) {
  const request = axios.post('', values)
  return (dispatch) => {
    request.then(() => {
      dispatch({
        type: CREATE_GALLERY,
        payload: values
      })
    })
  }
}
export function addUser(values) {
  const request = axios.post('', values)
  return (dispatch) => {
    request.then(() => {
      dispatch({
        type: ADD_USER,
        payload: values
      })
    })
  }
}

export function fetchGallery() {
  const request = axios.get(API_CALL + '/museums/1/gallery')
  // http://deframe-test-api.us-east-1.elasticbeanstalk.com:80/museums/1/gallery
  return (dispatch) => {
    request.then(({
      data
    }) => {
      console.log(data)
      dispatch({
        type: FETCH_GALLERY,
        payload: data
      })
    })
  }
}
export function fetchAdmins() {
  const request = axios.get(API_CALL + '/users')
  // have to change url for admin.
  // http://deframe-test-api.us-east-1.elasticbeanstalk.com:80/museums/1/gallery
  return (dispatch) => {
    request.then(({
      data
    }) => {
      dispatch({
        type: FETCH_ADMINS,
        payload: data
      })
    })
  }
}
//get museum by city
export function getMuseumByCity() {
  const request = axios.get('http://deframe-prod-api.us-east-1.elasticbeanstalk.com/museums/museumsbycity')
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: MUSEUM_BY_CITY,
        payload: data
      })
      console.log('data', data)
    },(reason)=>{
      console.log(reason)
    }).catch((err)=>{
      console.log(err)
    })
  }
}


