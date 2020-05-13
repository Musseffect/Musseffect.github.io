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
export const REQUEST_POSTS = "REQUEST_POSTS";
export var requestPosts=function()
{
    return {type:REQUEST_POSTS};
}
export const ERROR_RECEIVING_POSTS = "ERROR_RECEIVING_POSTS";
export var handleError = function(error)
{
    return {type:ERROR_RECEIVING_POSTS,error:error};
}
export var fetchPosts = function()
{
    return function(dispatch){
        dispatch(requestPosts())
        return fetch(`https://api.github.com/gists/546725186d756cd780efe1455e60eead`)
    .then(
      response => response.json(),
      error => dispatch(handleError(error))
    )
    .then(json =>
      dispatch(receivePosts(JSON.parse(json.files["mainContent.json"].content)))
        )
    };
}
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export var receivePosts = function(json)
{
    return {
        type:RECEIVE_POSTS,
        posts:json.posts,
        notes:json.notes
    }
}