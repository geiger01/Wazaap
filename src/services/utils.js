export function EpochToDate(seconds) {
    if (seconds < 10000000000)
        seconds *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    var epoch = seconds + (new Date().getTimezoneOffset() * -1); //for timeZone        
    const date = new Date(epoch);
    return ((date.getHours() < 10 ? `0${date.getHours()}` : date.getHours())) + ':' + (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes())
}
