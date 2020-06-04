import { createStore, applyMiddleware } from "redux"; 
import rootReducer from "../reducers/rootReducer.js";
import thunkMiddleware from 'redux-thunk';
import {fetchContent} from '../actions/actions.js';

const initialState=(function(){
		let state={};
		let about=[];
		state.about=about;
		state.title="";
		state.language = "ru";
		state.isFetching = false;
		state.hasError = false;
		state.tags = {};
		state.posts = [];
		state.notes = [];
		/*
		state.tags = {};
		state.posts.forEach(function(value)
		{
			value.tags.forEach(function(value)
			{
				state.tags[value]=false;
			});
		});
		if(localStorage)
		{
			if (localStorage.getItem("tags") !== null) {
				let tags = JSON.parse(localStorage.getItem("tags"));
				Object.entries(tags).forEach(function([key,value])
				{
					if(state.tags[key]!==undefined)
					{
						state.tags[key] = value;
					}
				});
			}else
			{
				localStorage.setItem("tags", JSON.stringify(state.tags));
			}
		}*/
		return state;
})();


const store = createStore(rootReducer,initialState,applyMiddleware(thunkMiddleware)
	/*,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);  

store.dispatch(fetchContent());

export default store;