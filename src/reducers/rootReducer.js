
import {
	CHANGE_OPTION,
	SWITCH_TAG_STATE,
	SWITCH_LINKTAG_STATE,
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
		case CHANGE_OPTION:
			state.options[action.option] = action.value;
			if(localStorage)
			{
				localStorage.setItem("options", JSON.stringify(state.options));
			}
			state.options = Object.assign({},state.options);
			return Object.assign({},state);
		case SWITCH_TAG_STATE:
			if(state.posts.tags[action.tag]!==undefined)
			{
				let index = state.posts.tags[action.tag];
				state.posts.tagEntries[index][1] = (!state.posts.tagEntries[index][1]);
				state.posts.tagEntries = state.posts.tagEntries.slice();
			}
			return Object.assign({},state);
		case SWITCH_LINKTAG_STATE:
			if(state.links.tags[action.tag]!==undefined)
			{
				let index = state.links.tags[action.tag];
				state.links.tagEntries[index][1] = (!state.links.tagEntries[index][1]);
				state.links.tagEntries = state.links.tagEntries.slice();
			}
			return Object.assign({},state);
		case REQUEST_CONTENT:
			return Object.assign({},state,{isFetching:true});
		case ERROR_RECEIVING_CONTENT:
			//window.alert(action.error);
			console.error(action.error);
			return Object.assign({},state,{hasError:true,isFetching:false});
		case RECEIVE_CONTENT:
			let posts = {items:action.posts,tags:{},tagEntries:[],dictionary:{}};
			posts.items.forEach(function(value,index)
			{
				value.tags.sort();
				value.tags.forEach(function(value)
				{
					posts.tags[value] = false;
				});
				posts.dictionary[value.link] = index;
			});
			let links = {
				groups:action.links,
				tags:{},
				tagEntries:[]
			};
			links.groups.sort((a,b)=>a.name.localeCompare(b.name));
			links.groups.forEach(function(group){
				group.items.sort((a,b)=>a.name.localeCompare(b.name));
				group.items.forEach(function(value)
				{
					value.tags.push("*");
					value.tags.sort();
					value.tags.forEach(function(value)
					{
						links.tags[value] = false;
					});
					if(value.name=="")
						value.name = value.href;
				});	
			});
			posts.tagEntries = Object.entries(posts.tags).sort((a,b)=>a[0].localeCompare(b[0]));
			links.tagEntries = Object.entries(links.tags).sort((a,b)=>a[0].localeCompare(b[0]));
			posts.tagEntries.forEach(([key,value],index)=>
			{
				posts.tags[key] = index;
			});
			links.tagEntries.forEach(([key,value],index)=>
			{
				links.tags[key] = index;
			});
			let sortedNotes = {};
			let notesDictionary = {};
			Object.keys(action.notes).forEach(function(lang)
			{
				sortedNotes[lang] = action.notes[lang].map(function(value)
					{
						return Object.assign({date:new Date(value.datetime)},value);
					}).sort(function(a,b)
					{
						return +b.date - +a.date;
					});
					notesDictionary[lang] = {};
				sortedNotes[lang].forEach(function(value,index)
				{
					notesDictionary[lang][value.link] = {index:index,lang:lang};
				})
			});
			return Object.assign({},state,{posts:posts,links:links,notes:sortedNotes,isFetching:false,notesDictionary});
		case REQUEST_NOTE:
			return Object.assign({},state,{note:{
				isFetching:true,
				content:null,
				updatedAt:null,
				err:null,
				url:null
			}});
		case ERROR_RECEIVING_NOTE:
			console.error(action.error);
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