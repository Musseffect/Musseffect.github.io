

export const CHANGE_OPTION = "CHANGE_OPTION";
export var changeOption = function(option, value){
    return {type:CHANGE_OPTION,option,value};
}
export var setTitle =  function(title){
    document.title = title;
}
export var setDescription = function(content){
    let description = document.getElementsByTagName("Meta").description;
    if(!description){
        let description = document.createElement("meta");
        description.name = "descrtiption";
        document.head.appendChild(description);
    }
    description.content = content;
}
export const SWITCH_TAG_STATE = "SWITCH_TAG_STATE";
export var clickOnTag = function(context, tag){
    return {type:SWITCH_TAG_STATE,tag,context};
}
export const REQUEST_CONTENT = "REQUEST_POSTS";
export var requestContent=function(){
    return {type:REQUEST_CONTENT};
}
export const ERROR_RECEIVING_CONTENT = "ERROR_RECEIVING_CONTENT";
export var handleError = function(error){
    return {type:ERROR_RECEIVING_CONTENT,error};
}
export const ERROR_RECEIVING_NOTE = "ERROR_RECEIVING_NOTE";
export var handleNoteError = function(error){
    return {type:ERROR_RECEIVING_NOTE,error};
}
export const REQUEST_NOTE = "REQUEST_NOTES";
export var requestNote = function(){
    return {type:REQUEST_NOTE};
}
var fetchNote = function(noteURL){
    return function(dispatch){
        dispatch(requestNote());
        return fetch(noteURL)
    .then(
      response => response.text(),
      error => dispatch(handleNoteError(error))
    )
    .then(content =>{
            try{
                dispatch(receiveNote(content,noteURL))
            }catch(error){
                dispatch(handleNoteError(error));
            }
        }
    )
    };
}
function shouldFetchNote(state,noteURL) {
    if(state.note.url == noteURL){
        const CACHE_TIME_MS = 1000*60*5;
        const item = state.note;
        const isCached = Date.now() - item.updatedAt<CACHE_TIME_MS;
        return !isCached;
    }
    return true;
  }
export var fetchNoteIfNeeded = function(url,language){
    return (dispatch,getState)=>{
        if(shouldFetchNote(getState(),url,language))
            return dispatch(fetchNote(url));
    }
}
export var fetchContent = function(contentLink,linkListLink){
    return function(dispatch){
        dispatch(requestContent());
        return Promise.all([
            fetch(contentLink).then(value=>value.json()),
            fetch(linkListLink).then(value=>value.json())
        ]).then(([jsonContent, jsonLinks]) =>{
                try{
                    dispatch(receiveContent(jsonContent,jsonLinks))
                }catch(error)
                {
                    dispatch(handleError(error));
                }
            }
        ).catch((error)=>{
            dispatch(handleError(error));
        })
    };
}
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export var receiveNote = function(content,url){
    return {
        type:RECEIVE_NOTE,
        content,
        url,
        receivedAt: Date.now()
    };
}
export const RECEIVE_CONTENT = "RECEIVE_CONTENT";
export var receiveContent = function(content,links){
    const posts = content.posts;
    const projects = content.projects;
    const notes = content.notes;
    return {
        type:RECEIVE_CONTENT,
        posts,
        projects,
        notes,
        links
    }
}