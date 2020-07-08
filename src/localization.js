

let localization = {
	//Main conainer
	switchLang:{ru:"English",en:"Русский"},
	menuProjects:{ru:"Проекты",en:"Projects"},
	menuNotes:{ru:"Заметки",en:"Notes"},
	menuLinks:{ru:"Ссылки",en:"Links"},
	menuAbout:{ru:"О мне",en:"About"},
	errorFirstPart:{ru:"Ошибочка вышла",en:"Oh shit i'm sorry"},
	errorSecondPart:{ru:"Хьюстон, у нас проблема",en:"I'm sorry, you've got an error, man. Deal with it"},
	//Links
	filter:{ru:"Фильтр",en:"Filter"},
	searchPrompt:{ru:"Поиск",en:"Search"},
	aboutTitle:{ru:"О мне. О чём?",en:"About. About what?"},
	noteLoadingError:{ru:"Чёртова страница не грузится. Many such cases. Sad!",en:"Couldn't load damn page"},
	darkThemeButton:{ru:"Включить тёмную тему",en:"Switch to dark theme"},
	lightThemeButton:{ru:"Включить светлую тему",en:"Switch to light theme"}

};
export function trs(string,lang)
{
	if (process.env.NODE_ENV !== 'production') {
		if(string[lang]==undefined)
		{
			console.error(`Localization for \"${lang}\" doesn't exist in string ${JSON.stringify(string)}`)
			return "undefined";
		}
	}
	return string[lang];
}
export function tr(key,lang)
{
	if (process.env.NODE_ENV !== 'production') {
		if(localization[key]==undefined){
			console.error(`Localization for key \"${key}\" doesn't exist in localization`);
			return "undefined";
		}
		else if(localization[key][lang]==undefined){
			console.error(`Localization for ${lang} doesn't exist in ${JSON.stringify(key)}`);
			return "undefined";
		}
	}
	return localization[key][lang];
}