import React from "react";
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import App from './containers/app.jsx';
import ScrollToTop from './containers/scrollToTop.jsx';
import store from "./store/store.js";
import style from "./scss/main.scss";

render(	  <Provider store={store}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<ScrollToTop>
				      <Route path="/:lang?" component={App}/>
					</ScrollToTop>
				</BrowserRouter>
			</Provider>,
			    document.getElementById('root'));