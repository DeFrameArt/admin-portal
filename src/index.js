//import react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//import global styles
import 'daemonite-material/js/material.min.js';
import './default-overrides.scss'

//import redux
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';


//Component imports
import ChangePassword from './components/change-password';
<<<<<<< HEAD
import LoginForm from './components/login-form';
import RegisterForm from './components/register';
import AddNewPainting from './components/add-new-painting';
=======
import AddNewExhibit from './components/add-new-exhibit';
>>>>>>> route-refactor
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


//small functional component to render the dashboard. Essentially wraps the sidebar component in a div and puts any children below it.
//To add/modify/delete links in the sidebar, modify components/dashboardSidebar/sidebar.js
const Dashboard = (props) => {
  return (
    <div>
      <Sidebar />
        {props.children}
    </div>
  )
}

// import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
<<<<<<< HEAD
        <Switch>
          <Route path="/changepassword" component ={ChangePassword} />
          <Route path="/register" component ={RegisterForm} />
          <Route path="/dashboard" component={SidebarRightPush} />
          <Route path="/add-new-painting" component={AddNewPainting} />
          <Route path="/add-gallery" component ={AddNewGallery} />
          <Route path="/show-gallery" component ={ShowGallery}/>
          <Route path="/add-new-user" component={ AddNewUser } />
          <Route path="/welcome" component={ WelcomeAdmins } />
          <Route path ="/featureimage" component={ MuseumFeatureImage } />
          {/* <Route path="featuretype/:id" component={featuretype} /> */}
          <Route path="/" component ={LoginForm} />
        </Switch>
=======
          <Route exact path="/login" component ={LoginForm} />
          <Route exact path="/register" component ={RegisterForm} />

{
  /* 
  I'm not sure if tbelow is the best way to handle the routing. I think it's possible to do:
<Route path="/" component={Sidebar}>
<Switch>
  //routes for the different screens here
</Switch>


We will also need to figure out how to redirect on login. there is an example in the react-router docs, but it is a bit vague
  */
}
          <Route path="/dashboard" children={(props) => {
            return (
              <Dashboard>
                <Switch>
                  <Route path="/changepassword" component ={ChangePassword} />
                  <Route path="/add-new-exhibit" component={AddNewExhibit} />
                  <Route path="/add-gallery" component ={AddNewGallery} />
                  <Route path="/show-gallery" component ={ShowGallery}/>
                  <Route path="/add-new-user" component={ AddNewUser } />
                  <Route path="/welcome" component={ WelcomeAdmins } />
                  <Route path ="/featureimage" component={ MuseumFeatureImage } />
                  {/* <Route path="featuretype/:id" component={featuretype} /> */}
                </Switch>
              </Dashboard> 
            )
          }} />
        
>>>>>>> route-refactor
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
// registerServiceWorker();
