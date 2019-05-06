import './index.scss';
import * as serviceWorker from './registerServiceWorker';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './App';
import configureStore from "./store";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Provider } from "react-redux";

export const routing = (
  
  <Provider store = {configureStore()}>
    <Router>

      <div className="container-fluid">

        <div className="header-container fixed-top">

          <div className="container">

            <header>

              <nav className="navbar">

                <ul className="navbar-nav mr-auto">

                  <li className="nav-item">

                    <Link to="/">

                    <i className="material-icons">


                    home



                    </i>

                    </Link>

                  </li>

                  <li className="nav-item">

                    <Link to="/">Home</Link>

                  </li>

                  <li className="nav-item">

                    <Link to="/cart">Cart</Link>

                  </li>

                </ul>

              </nav>

            </header>

          </div>

        </div>

        <Route exact={true} path="/" component={App} />

        <Route path="/cart" component={App} />

      </div>

    </Router>
  </Provider>
)



ReactDOM.render(
  routing, 
  document.getElementById('root'));



// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
