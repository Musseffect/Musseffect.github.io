

export function dateToString(date)
{
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth()+1).padStart(2, '0');
    const yyyy = String(date.getFullYear()).padStart(4, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const minmin = String(date.getMinutes()).padStart(2, '0');
    return `${dd}-${mm}-${yyyy} ${hh}:${minmin}`;
}


export const copyToClipBoard = (str) =>
{
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};