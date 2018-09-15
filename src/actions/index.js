import axios from 'axios';
import {API_CALL} from '../utils/project_consts';

export const  CREATE_USER ='CREATE_USER';
export const LOGIN_USER ='LOGIN_USER';
export const FETCH_POST ='FETCH_POST';
export const CREATE_PAINTING='CREATE_PAINTING';
export const CREATE_GALLERY ='CREATE_GALLERY';
export const FETCH_GALLERY= 'FETCH_GALLERY';
export const ADD_USER ='ADD_USER';
export const FETCH_ADMINS = 'FETCH_ADMINS'
export const FEATURE_IMAGES ='FEATURE_IMAGES';

export function createUser(values){
  return(dispatch, getState) =>{
    debugger
  const request = axios.post(API_CALL+'/accounts/register',values)
.then((response) => {
       dispatch({
         type: CREATE_USER,
         payload:values
       })
 })
}
}
export function loginUser(values){
  return(dispatch,getState) =>{
  const request = axios.post(API_CALL+'/accounts/login', values)
  return(dispatch) =>{
    request.then(()=>{
      dispatch({
       type: LOGIN_USER,
       payload:values
      })
    })
  }
  }
}

export function galleryFeatureImages(){
  const request = axios.get(API_CALL+'/museums/1/featuredimages')
  return(dispatch)=>{
    request.then(({data})=>{
    console.log(data)
    dispatch({
      type:FEATURE_IMAGES,
      payload:data
  })
})
}
}
//createExhibit is add painting
export function createPainting(values){
  const request= axios.post('', values)
  return(dispatch)=>{
    request.then(()=>{
      dispatch({
        type:CREATE_PAINTING,
        payload:values
      })
    })
  }
}
export function createGallery(values){
  const request = axios.post('', values)
  return(dispatch) =>{
    request.then(()=>{
      dispatch({
        type:CREATE_GALLERY,
        payload:values
      })
    })
  }
}
export function addUser(values){
  const request = axios.post('', values)
  return(dispatch)=>{
    request.then(()=>{
      dispatch({
        type:ADD_USER,
        payload:values
      })
    })
  }
}

export function fetchGallery(){
  const request = axios.get(API_CALL+'/museums/1/gallery')
  // http://deframe-test-api.us-east-1.elasticbeanstalk.com:80/museums/1/gallery
  return(dispatch) =>{
    request.then(({data}) =>{
      console.log(data)
      dispatch({
        type:FETCH_GALLERY,
        payload:data
      })
    })
  }
}
export function fetchAdmins(){
  const request = axios.get(API_CALL+'/users')
  // have to change url for admin.
  // http://deframe-test-api.us-east-1.elasticbeanstalk.com:80/museums/1/gallery
  return(dispatch) =>{
    request.then(({data}) =>{
      dispatch({
        type:FETCH_ADMINS,
        payload:data
      })
    })
  }
}
