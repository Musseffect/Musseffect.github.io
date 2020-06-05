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
		state.notesDictionary={};
		state.note = {
			isFetching:false,
			content:null,
			updatedAt:null,
			err:null,
			url:null
		};
		return state;
})();

const contentBaseLink = "https://gist.githubusercontent.com/Musseffect/546725186d756cd780efe1455e60eead/raw/content.json";
//`https://api.github.com/gists/546725186d756cd780efe1455e60eead`;

const store = createStore(rootReducer,initialState,applyMiddleware(thunkMiddleware)
	/*,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);  

store.dispatch(fetchContent(contentBaseLink));

export default store;