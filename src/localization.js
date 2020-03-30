

export default function t(string,lang)
{
	if (process.env.NODE_ENV !== 'production') {
		if(string[lang]==undefined)
			console.log("Localization for "+lang+ " doesn't exist in "+JSON.stringify(string));
	}
	return string[lang];
}