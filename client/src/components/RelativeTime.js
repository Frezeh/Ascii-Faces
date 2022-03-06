export function formatRelativeTime(value, locale) {
    const date = new Date(value);
    const deltaDays = (date.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    const formatter = new Intl.RelativeTimeFormat(locale);
    
    if (deltaDays < -7) return "Greater than 1 week";
    else return formatter.format(Math.round(deltaDays), 'days');
}