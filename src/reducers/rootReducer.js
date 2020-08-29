
import {
	CHANGE_OPTION,
	SET_TITLE,
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
		case SET_TITLE:
			document.title = action.title;
			return Object.assign({},state,{title:action.title});
		case SWITCH_TAG_STATE:
			if(state.posts.tags[action.tag]!==undefined)
			{
				let index = state.posts.tags[action.tag];
				let tagValue = state.posts.tagEntries[index][1]=(!state.posts.tagEntries[index][1]);
				if (localStorage) {
					localStorage.setItem("tags", JSON.stringify(state.posts.tagEntries));
				}
				state.posts.tagEntries = state.posts.tagEntries.slice();
				//state.posts.tagEntries = Object.assign({},state.posts.tagEntries);
			}
			return Object.assign({},state);
		case SWITCH_LINKTAG_STATE:
			if(state.links.tags[action.tag]!==undefined)
			{
				let index = state.links.tags[action.tag];
				let tagValue = state.links.tagEntries[index][1]=(!state.links.tagEntries[index][1]);
				if (localStorage) {
					localStorage.setItem("linktags", JSON.stringify(state.links.tagEntries));
				}
				state.links.tagEntries = state.links.tagEntries.slice();
				//state.links.tagEntries = Object.assign({},state.links.tagEntries);
			}
			return Object.assign({},state);
		case REQUEST_CONTENT:
			return Object.assign({},state,{isFetching:true});
		case ERROR_RECEIVING_CONTENT:
			window.alert(action.error);
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
			/*links.groups.forEach(function(value)
			{
				value.items.sort((a,b)=>a.name.localeCompare(b.name));
			});*/
			if(localStorage)
			{
				if (localStorage.getItem("tags") !== null) {
					let storageTags = JSON.parse(localStorage.getItem("tags"));
					if(Array.isArray(storageTags)){
						storageTags.forEach(function([key,value])
						{
							if(posts.tags[key]!==undefined)
							{
								posts.tags[key] = value;
							}
						})
					}
					posts.tagEntries = Object.entries(posts.tags).sort((a,b)=>a[0].localeCompare(b[0]));
				}else
				{
					posts.tagEntries = Object.entries(posts.tags).sort((a,b)=>a[0].localeCompare(b[0]));
					localStorage.setItem("tags", JSON.stringify(posts.tagEntries));
				}

				if (localStorage.getItem("linktags") !== null) {
					let storageTags = JSON.parse(localStorage.getItem("linktags"));
					if(Array.isArray(storageTags)){
					storageTags.forEach(function([key,value])
					{
						if(links.tags[key]!==undefined)
						{
							links.tags[key] = value;
						}
					})
					links.tagEntries = Object.entries(links.tags).sort((a,b)=>a[0].localeCompare(b[0]));
					}
				}else
				{
					links.tagEntries = Object.entries(links.tags).sort((a,b)=>a[0].localeCompare(b[0]));
					localStorage.setItem("linktags", JSON.stringify(links.tagEntries));
				}
			}
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
			Object.keys(action.notes).forEach(function(key)
			{
				sortedNotes[key] = action.notes[key].map(function(value)
					{
						return Object.assign({date:new Date(value.datetime)},value);
					}).sort(function(a,b)
					{
						return +b.date - +a.date;
					});
				sortedNotes[key].forEach(function(value,index)
				{
					notesDictionary[value.link] = {index:index,lang:key};
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