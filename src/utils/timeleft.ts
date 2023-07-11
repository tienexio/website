import moment from "moment";

export interface Timeleft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  duration: number;
}

export function getTimeleft(a: moment.Moment, b: moment.Moment): Timeleft {
  if (!a.isValid() || !b.isValid() || a.isSameOrBefore(b)) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      duration: 0,
    };
  }

  var duration = moment.duration(a.diff(b));
  var durationSec = Math.floor(duration.asSeconds())

  //Get Days and subtract from duration
  var days = Math.floor(duration.asDays());
  duration.subtract(moment.duration(days, 'days'));

  //Get hours and subtract from duration
  var hours = Math.floor(duration.hours());
  duration.subtract(moment.duration(hours, 'hours'));

  //Get Minutes and subtract from duration
  var minutes = Math.floor(duration.minutes());
  duration.subtract(moment.duration(minutes, 'minutes'));

  //Get Seconds and subtract from duration
  var seconds = Math.floor(duration.seconds());

  return {
    days: days < 10 ? '0' + days : '' + days,
    hours: hours < 10 ? '0' + hours : '' + hours,
    minutes: minutes < 10 ? '0' + minutes : '' + minutes,
    seconds: seconds < 10 ? '0' + seconds : '' + seconds,
    duration: durationSec,
  };
}