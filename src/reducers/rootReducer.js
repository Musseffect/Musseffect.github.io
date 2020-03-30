var rootReducer=function(state,action)
{
	switch(action.type)
	{
		case "SWITCH_LANG":
			state.lang=(state.lang=="ru"?"eng":"ru");
			break;
		case "SET_TITLE":
			document.title = action.title;
			state.title = action.title;
			break;
		case "SWITCH_TAG_STATE":
			if(state.tags[action.tag]!==undefined)
			{
				state.tags[action.tag]=(!state.tags[action.tag]);
				if (localStorage) {
					localStorage.setItem("tags", JSON.stringify(state.tags));
				}
				state.tags = Object.assign({},state.tags);
			}
			break;
	}
	//state = stateReducer(state,action);
	return Object.assign({},state);
}

export default rootReducer;