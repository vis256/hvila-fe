// function inSeconds(dateObject: Date) {
//     return dateObject.getTime() / 1000;
// }

// function inMinutes(dateObject: Date) {
//     return inSeconds(dateObject) / 60;
// }
    
// function inHours(dateObject: Date) {
//     return inSeconds(dateObject) / (60 * 60);
// }
    
// function inDays(dateObject: Date) {
//     return inSeconds(dateObject) / (60 * 60 * 24);
// }
    
// function inWeeks(dateObject: Date) {
//     return inSeconds(dateObject) / (60 * 60 * 24 * 14);
// }

// function inMonths(dateObject: Date) {
//     return inSeconds(dateObject) / (60 * 60 * 24 * 30);
// }

export function optimalTimeString(time: number): [string, string] {
    var tis = time / 1000;
    
    var baseString: string;
    if (tis > 0) baseString = 'in ';
    else {
        baseString = 'late by ';
        tis *= -1;
    }

    if (tis < 60) {
        return [baseString + Math.floor(tis) + " seconds", "date-0"];
    }
    tis = tis / 60;
    if (tis < 60) {
        if (tis == 1) return [baseString + Math.floor(tis) + " minute", "date-1"];
        return [baseString + Math.floor(tis) + " minutes", "date-1"];
    }
    tis = tis / 60;
    if (tis < 60) {
        if (tis == 1) return [baseString + Math.floor(tis) + " hour", "date-2"];
        return [baseString + Math.floor(tis) + " hours", "date-2"];
    }
    tis = tis / 24
    if (tis < 60) {
        if (tis == 1) return [baseString + Math.floor(tis) + " day", "date-3"];
        return [baseString + Math.floor(tis) + " days", "date-3"];
    }
    tis = tis / 14;
    if (tis < 3) {
        if (tis == 1) return [baseString + Math.floor(tis) + " week", "date-4"];
        return [baseString + Math.floor(tis) + " weeks", "date-4"];
    }
    tis = tis * 14 / 30;
    if (tis == 1) return [baseString + Math.floor(tis) + " month", "date-5"];
    return [baseString + Math.floor(tis) + " months", "date-5"];
}
    