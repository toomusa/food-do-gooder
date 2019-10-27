import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";

// import containers
import App from './containers/App';
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import Signout from "./containers/Signout";
import AddLog from './containers/AddLog';
import Registration from './containers/Registration';

// import components
import reducers from "./reducers";
import Dashboard from './containers/Dashboard';
import Tax from './containers/Tax';
import Home from './containers/Home';
import Partners from './containers/Partners';

// configure redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {auth: { authenticated: localStorage.getItem("token")}},
    composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/signout" component={Signout}/>
                <Route exact path="/newentry" component={AddLog}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/tax" component={Tax}/>
                <Route exact path="/partners" component={Partners}/>
            </App>
        </Router>
    </Provider>
    , document.getElementById('root')
);
