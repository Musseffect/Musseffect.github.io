import { createStore } from "redux"; 
import rootReducer from "../reducers/rootReducer.js";


const initialState=(function(){
		let state={};
		return state;
})();


const store = createStore(rootReducer,initialState);  


export default store;