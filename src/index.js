import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import {Router,Route} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

//creating history right here
const history = createBrowserHistory();

//TODO: add in the paths once the navbar's up
//Everything in app will be displayed now

ReactDOM.render(
	<Router history={history}>
		<Route path="/" component={App}>
		</Route>
	</Router>,
	document.getElementById('root')
);
