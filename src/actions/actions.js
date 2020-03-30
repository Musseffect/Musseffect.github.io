
export var switchLanguage = function()
{
    return {type:"SWITCH_LANG"};
}
export var setTitle =  function(title)
{
    return {type:"SET_TITLE",title:title};
}
export var clickOnTag = function(tagName)
{
    return {type:"SWITCH_TAG_STATE",tag:tagName};
}