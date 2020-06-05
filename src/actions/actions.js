

export const SWITCH_LANG = "SWITCH_LANG";
export var switchLanguage = function()
{
    return {type:SWITCH_LANG};
}
export const SET_TITLE = "SET_TITLE";
export var setTitle =  function(title)
{
    return {type:SET_TITLE,title:title};
}
export const SWITCH_TAG_STATE = "SWITCH_TAG_STATE";
export var clickOnTag = function(tagName)
{
    return {type:SWITCH_TAG_STATE,tag:tagName};
}
export const REQUEST_CONTENT = "REQUEST_POSTS";
export var requestContent=function()
{
    return {type:REQUEST_CONTENT};
}
export const ERROR_RECEIVING_CONTENT = "ERROR_RECEIVING_CONTENT";
export var handleError = function(error)
{
    return {type:ERROR_RECEIVING_CONTENT,error:error};
}
export const ERROR_RECEIVING_NOTE = "ERROR_RECEIVING_NOTE";
export var handleNoteError = function(error)
{
    return {type:ERROR_RECEIVING_NOTE,error:error};
}
export const REQUEST_NOTE = "REQUEST_NOTES";
export var requestNote = function()
{
    return {type:REQUEST_NOTE};
}
var fetchNote = function(noteURL)
{
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
            }catch(error)
            {
                dispatch(handleNoteError(error));
            }
        }
        )
    };
    //https://gist.github.com/Musseffect/546725186d756cd780efe1455e60eead/raw/OscilloscopeLines.md
}
function shouldFetchNote(state, noteURL) {
    if(state.note.url == noteURL)
    {
        const CACHE_TIME_MS = 1000*60*5;
        const item = state.note;
        const isCached = Date.now() - item.updatedAt<CACHE_TIME_MS;
        return !isCached;
    }
    return true;
  }
export var fetchNoteIfNeeded = function(noteURL)
{
    return (dispatch,getState)=>{
        if(shouldFetchNote(getState(),noteURL))
            return dispatch(fetchNote(noteURL));
    }
}
export var fetchContent = function(contentLink)
{
    return function(dispatch){
        dispatch(requestContent());
        return fetch(contentLink)
        .then(
        response => response.json(),
        error => dispatch(handleError(error))
        )
        .then(json =>{
                try{
                    dispatch(receiveContent(json))
                }catch(error)
                {
                    dispatch(handleError(error));
                }
            }
            )
    };
}
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export var receiveNote = function(content,noteURL)
{
    return {
        type:RECEIVE_NOTE,
        content:content,
        url:noteURL,
        receivedAt: Date.now()
    };
}
export const RECEIVE_CONTENT = "RECEIVE_CONTENT";
export var receiveContent = function(files)
{
    /*const posts = JSON.parse(files["posts.json"].content).posts;//TODO remove .posts
    const notesDescription = JSON.parse(files["notes.json"].content);*/
    const posts = files.posts;
    const notes = files.notes;
    /*const notes = notesDescription.notes.map((value)=>{return {
        content:files[value.file].content,
        name:value.name,
        datetime:value.datetime
    }});*/
    return {
        type:RECEIVE_CONTENT,
        posts:posts,
        notes:notes
    }
}