import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers/index';
import ChangePassword from './components/change-password';
import LoginForm from './components/login-form';
import RegisterForm from './components/register';
import AddNewPainting from './components/add-new-painting';
import AddNewGallery  from './components/add-gallery';
import ShowGallery from './components/show_gallery';
import AddNewUser from './components/add_newuser';
import WelcomeAdmins from './components/welcome_admins';
// import featuretype from './components/feature_type.js'
import MuseumFeatureImage from './components/museum_featureImage';
import './index.css';
import SidebarRightPush from './components/dashbord';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
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
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
// registerServiceWorker();
