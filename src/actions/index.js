import axios from 'axios';
// import cors from 'cors';

export const  CREATE_USER ='CREATE_USER';
export const LOGIN_USER ='LOGIN_USER';
export const FETCH_POST ='FETCH_POST';



export function createUser(values){
  return(dispatch, getState) =>{
    debugger
  const request = axios.post('http://deframe-test-api.us-east-1.elasticbeanstalk.com:80/accounts/register',
  values)
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
    const request = axios.post('http://deframe-test-api.us-east-1.elasticbeanstalk.com:80/accounts/login',values)
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
export function fetchPost(id){ //we will make sure props we pass are title categories
  const request = axios.get('http://deframe-test-api.us-east-1.elasticbeanstalk.com:80/users/id/1')
  return(dispatch) =>{
    request.then(()=>{
dispatch({
  type:FETCH_POST,
  payload:id
})
})
}
}
