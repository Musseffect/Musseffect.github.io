import { createStore, applyMiddleware } from "redux"; 
import rootReducer from "../reducers/rootReducer.js";
import thunkMiddleware from 'redux-thunk';
import {fetchContent, fetchContentGist} from '../actions/actions.js';

const initialState=(function(){
		let state={};
		let about=[];
		state.about=about;
		state.title="";
		state.isFetching = false;
		state.hasError = false;
		state.options = {
			language:"en",
			theme:"light"
		}
		state.posts = {};
		state.notes = [];
		if(localStorage)
			{
				if (localStorage.getItem("options") !== null) {
					let options = JSON.parse(localStorage.getItem("options"));
					if(typeof options === 'object'){
						Object.keys(options).forEach(function(value){
							if(state.options[value]!==undefined)
								state.options[value] = options[value];
						})
					}
				}else
				{
					localStorage.setItem("options", JSON.stringify(state.options));
				}
			}
		state.notesDictionary={};
		state.note = {
			isFetching:false,
			content:null,
			updatedAt:null,
			err:null,
			url:null
		};
		state.links={items:[],tags:[]};
		return state;
})();

const contentBaseLink = window.location.origin+"/content/index.json";//"https://gist.githubusercontent.com/Musseffect/546725186d756cd780efe1455e60eead/raw/content.json";
const linksBaseLink = window.location.origin+"/content/links.json";//"https://gist.githubusercontent.com/Musseffect/546725186d756cd780efe1455e60eead/raw/links.json";
const contentGist = `https://api.github.com/gists/546725186d756cd780efe1455e60eead`;

const store = createStore(rootReducer,initialState,applyMiddleware(thunkMiddleware)
	/*,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);  

store.dispatch(fetchContent(contentBaseLink,linksBaseLink));
//store.dispatch(fetchContentGist(contentGist));
export default store;