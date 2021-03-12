
import React from 'react';

import Registro from './pages/Registro';
import login from './pages/login';
import Home from './pages/home.jsx'
import Logout from './components/logout'
import info from './pages/info.jsx'

import NotFoundPage from './error/NotFoundPage.jsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/login' component={login} />
          <Route exact path='/info' component={info} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path='/' component={Home} />
          <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  
  );
}
export default App;
