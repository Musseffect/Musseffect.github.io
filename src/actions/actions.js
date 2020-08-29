

export const CHANGE_OPTION = "CHANGE_OPTION";
export var changeOption = function(option,value){
    return {type:CHANGE_OPTION,option:option,value:value};
}
export const SET_TITLE = "SET_TITLE";
export var setTitle =  function(title){
    return {type:SET_TITLE,title:title};
}
export const SWITCH_TAG_STATE = "SWITCH_TAG_STATE";
export var clickOnTag = function(tagName){
    return {type:SWITCH_TAG_STATE,tag:tagName};
}
export const SWITCH_LINKTAG_STATE = "SWITCH_LINKTAG_STATE";
export var clickOnLinkTag = function(tagName){
    return {type:SWITCH_LINKTAG_STATE,tag:tagName};
}
export const REQUEST_CONTENT = "REQUEST_POSTS";
export var requestContent=function(){
    return {type:REQUEST_CONTENT};
}
export const ERROR_RECEIVING_CONTENT = "ERROR_RECEIVING_CONTENT";
export var handleError = function(error){
    return {type:ERROR_RECEIVING_CONTENT,error:error};
}
export const ERROR_RECEIVING_NOTE = "ERROR_RECEIVING_NOTE";
export var handleNoteError = function(error){
    return {type:ERROR_RECEIVING_NOTE,error:error};
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
function shouldFetchNote(state, noteURL) {
    if(state.note.url == noteURL){
        const CACHE_TIME_MS = 1000*60*5;
        const item = state.note;
        const isCached = Date.now() - item.updatedAt<CACHE_TIME_MS;
        return !isCached;
    }
    return true;
  }
export var fetchNoteIfNeeded = function(noteURL){
    return (dispatch,getState)=>{
        if(shouldFetchNote(getState(),noteURL))
            return dispatch(fetchNote(noteURL));
    }
}
export var fetchContentGist = function(contentGistLink){
    return function(dispatch){
        dispatch(requestContent());
        return fetch(contentGistLink).then(value=>value.json())
            .then((gist) =>{
                try{
                    dispatch(receiveContent(
                        JSON.parse(gist.files["content.json"].content),
                        JSON.parse(gist.files["links.json"].content)));
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
export var fetchContent = function(contentLink,linksLink){
    return function(dispatch){
        dispatch(requestContent());
        return Promise.all([
            fetch(contentLink).then(value=>value.json()),
            fetch(linksLink).then(value=>value.json())
        ]).then(([jsonContent,jsonLinks]) =>{
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
export var receiveNote = function(content,noteURL){
    return {
        type:RECEIVE_NOTE,
        content:content,
        url:noteURL,
        receivedAt: Date.now()
    };
}
export const RECEIVE_CONTENT = "RECEIVE_CONTENT";
export var receiveContent = function(content,links){
    /*const posts = JSON.parse(files["posts.json"].content).posts;//TODO remove .posts
    const notesDescription = JSON.parse(files["notes.json"].content);*/
    const posts = content.posts;
    const notes = content.notes;
    /*const notes = notesDescription.notes.map((value)=>{return {
        content:files[value.file].content,
        name:value.name,
        datetime:value.datetime
    }});*/
    return {
        type:RECEIVE_CONTENT,
        posts:posts,
        notes:notes,
        links:links
    }
}