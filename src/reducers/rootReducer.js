
import {
	SWITCH_LANG,
	SET_TITLE,
	SWITCH_TAG_STATE,
	REQUEST_CONTENT,
	ERROR_RECEIVING_CONTENT,
	RECEIVE_CONTENT,
	REQUEST_NOTE,
	ERROR_RECEIVING_NOTE,
	RECEIVE_NOTE
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
		case REQUEST_CONTENT:
			return Object.assign({},state,{isFetching:true});
		case ERROR_RECEIVING_CONTENT:
			console.log(action.error);
			return Object.assign({},state,{hasError:true,isFetching:false});
		case RECEIVE_CONTENT:
			let tags = {};
			action.posts.forEach(function(value)
			{
				value.tags.sort();
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
			let sortedNotes = action.notes.map(function(value)
			{
				return Object.assign({date:new Date(value.datetime)},value);
			}).sort(function(a,b)
			{
				return +b.date - +a.date;
			});
			let notesDictionary = {};
			sortedNotes.forEach(function(value,index)
			{
				notesDictionary[value.link] = index;
			})
			return Object.assign({},state,{posts:action.posts,tags:tags,notes:sortedNotes,isFetching:false,notesDictionary});
		case REQUEST_NOTE:
			return Object.assign({},state,{note:{
				isFetching:true,
				content:null,
				updatedAt:null,
				err:null,
				url:null
			}});
		case ERROR_RECEIVING_NOTE:
			console.log(action.error);
			return Object.assign({},state,{note:{
				isFetching:false,
				content:null,
				updatedAt:null,
				err:true,
				url:null
			}});
		case RECEIVE_NOTE:
			return Object.assign({},state,{note:{
				isFetching:false,
				content:action.content,
				updatedAt:action.receivedAt,
				err:null,
				url:action.url
			}});
		default:
			return state;
	}
}

export default rootReducer;