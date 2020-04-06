
import {
	SWITCH_LANG,
	SET_TITLE,
	SWITCH_TAG_STATE,
	REQUEST_POSTS,
	ERROR_RECEIVING_POSTS,
	RECEIVE_POSTS
} from '../actions/actions.js';

var rootReducer=function(state, action)
{
	switch(action.type)
	{
		case SWITCH_LANG:
			return Object.assign({},state,{lang:(state.lang=="ru"?"eng":"ru")});
		case SET_TITLE:
			document.title = action.title;
			return Object.assign({},state,{title:action.title});
		case SWITCH_TAG_STATE:
			if(state.tags[action.tag]!==undefined)
			{
				state.tags[action.tag]=(!state.tags[action.tag]);
				if (localStorage) {
					localStorage.setItem("tags", JSON.stringify(state.tags));
				}
				state.tags = Object.assign({},state.tags);
			}
			return Object.assign({},state);
		case REQUEST_POSTS:
			return Object.assign({},state,{isFetching:true});
		case ERROR_RECEIVING_POSTS:
			return Object.assign({},state,{hasError:true});
		case RECEIVE_POSTS:
			let tags = {};
			action.posts.forEach(function(value)
			{
				value.tags.forEach(function(value)
				{
					tags[value]=false;
				});
			});
			if(localStorage)
			{
				if (localStorage.getItem("tags") !== null) {
					let storageTags = JSON.parse(localStorage.getItem("tags"));
					Object.entries(storageTags).forEach(function([key,value])
					{
						if(tags[key]!==undefined)
						{
							tags[key] = value;
						}
					});
				}else
				{
					localStorage.setItem("tags", JSON.stringify(tags));
				}
			}
			return Object.assign({},state,{posts:action.posts,tags:tags,isFetching:false});
		default:
			return state;
	}
}

export default rootReducer;