//import react
import React from 'react';
import ReactDOM from 'react-dom';

//import react-router
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//import global styles
import 'daemonite-material/js/material.min.js';
import './global-styles.scss';

//import redux
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';


//Component imports
import ChangePassword from './components/change-password';
import AddNewExhibit from './components/add-new-exhibit';
import AddNewGallery  from './components/add-gallery';
import ShowGallery from './components/show_gallery';
import AddNewUser from './components/add_newuser';
import WelcomeAdmins from './components/welcome_admins';
// import featuretype from './components/feature_type.js'
import MuseumFeatureImage from './components/museum_featureImage';

//Import components using single import statement
//requires an index.js file in compononents folder
import {
  LoginForm, 
  RegisterForm, 
  Sidebar
} from './components'


// import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
          <Route exact path="/login" component ={LoginForm} />
          <Route exact path="/register" component ={RegisterForm} />
          
          <Route path="/dashboard" component={props => {
            return (
              <>
                <Sidebar {...props}/>
                <div className='content-wrapper '>
                  <Switch>
                    {/* <Route path="/changepassword" component ={ChangePassword} /> */}
                    <Route path={`${props.match.path}/home`} />
                    <Route path={`${props.match.path}/add-new-exhibit`} component={AddNewExhibit} />
                    <Route path={`${props.match.path}/add-gallery`} component ={AddNewGallery} />
                    <Route path={`${props.match.path}/show-gallery`} component ={ShowGallery}/>
                    <Route path={`${props.match.path}/add-new-user`}  component={ AddNewUser } />
                    <Route path={`${props.match.path}/admins`} component={ WelcomeAdmins } />
                    <Route path ="/featureimage" component={ MuseumFeatureImage } />
                    {/* <Route path="featuretype/:id" component={featuretype} /> */}
                  </Switch>   
                </div>
              </>
      
            )
          }} />
        
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
// registerServiceWorker();
