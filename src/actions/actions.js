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
    console.log(error);
    return {type:ERROR_RECEIVING_CONTENT,error:error};
}
export var fetchContent = function()
{
    return function(dispatch){
        dispatch(requestContent())
        return fetch(`https://api.github.com/gists/546725186d756cd780efe1455e60eead`)
    .then(
      response => response.json(),
      error => dispatch(handleError(error))
    )
    .then(json =>{
            try{
                dispatch(receiveContent(json.files))
            }catch(error)
            {
                dispatch(handleError(error));
            }
        }
        )
    };
}
export const RECEIVE_CONTENT = "RECEIVE_CONTENT";
export var receiveContent = function(files)
{
    const posts = JSON.parse(files["posts.json"].content).posts;
    const notesDescription = JSON.parse(files["notes.json"].content);
    const notes = notesDescription.notes.map((value)=>{return {
        content:files[value.file].content,
        name:value.name,
        datetime:value.datetime
    }});
    return {
        type:RECEIVE_CONTENT,
        posts:posts,
        notes:notes
    }
    /*return {
        type:RECEIVE_CONTENT,
        posts:json.posts,
        notes:json.notes
    }*/
}