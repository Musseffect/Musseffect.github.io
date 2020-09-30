

let localization = {
	["projects-menu"]:{ru:"Проекты",en:"Projects"},
	["notes-menu"]:{ru:"Заметки",en:"Notes"},
	["links-menu"]:{ru:"Ссылки",en:"Links"},
	["about-menu"]:{ru:"Обо мне",en:"About"},
	["error-first-part"]:{ru:"Ошибочка вышла",en:"Oh shit i'm sorry"},
	["error-second-part"]:{ru:"Хьюстон, у нас проблема",en:"I'm sorry, you've got an error, man. Deal with it"},
	//Links
	filter:{ru:"Фильтр",en:"Filter"},
	["search-prompt"]:{ru:"Поиск",en:"Search"},
	["about-title"]:{ru:"Обо мне. But why?",en:"About. About what?"},
	["main-description"]:{
		ru:"Математика, программирования, компьютерная графика & knuckles.",
		en:"Random stuff for my own amusement. Math, programming, computer graphics."
	},
	["links-description"]:{
		ru:"Huh?",
		en:"Huh?"
	},
	["note-loading-error"]:{ru:"Чёртова страница не грузится. Many such cases. Sad!",en:"Couldn't load damn page"},
	["dark-theme-button"]:{ru:"Включить тёмную тему",en:"Switch to dark theme"},
	["light-theme-button"]:{ru:"Включить светлую тему",en:"Switch to light theme"}

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