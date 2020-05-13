

export function dateToString(date)
{
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth()+1).padStart(2, '0');
    const yyyy = String(date.getFullYear()).padStart(4, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const minmin = String(date.getMinutes()).padStart(2, '0');
    return `${dd}-${mm}-${yyyy} ${hh}:${minmin}`;
}
/*export function pad(number,size)
{
    var string = String(number);
    while(string.length<size)
        string = "0" + string;
    return string;
}*/