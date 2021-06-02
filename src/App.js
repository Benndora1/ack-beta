import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import { AuthProvider } from './Auth';
import ProtectedRoute from './ProtectedRoute';



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />

              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <ProtectedRoute path="/" name="Home" component={TheLayout} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
