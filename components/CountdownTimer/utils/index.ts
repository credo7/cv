import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampDayjs:dayjs.Dayjs) {
    const nowDayjs = dayjs();
    console.log(timestampDayjs)
    if(timestampDayjs.isBefore(nowDayjs)) {
        console.log(nowDayjs)
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }
    return {
        seconds : getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes : getRemainingMinutes(nowDayjs, timestampDayjs),
        hours : getRemainingHours(nowDayjs, timestampDayjs),
        days : getRemainingDays(nowDayjs, timestampDayjs)
    } ;
}

function getRemainingSeconds(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
    console.log(123)
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}

function padWithZeros(number: number, minLength: number) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) +  numberString;
}