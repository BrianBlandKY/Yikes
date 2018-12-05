
function normalizeHour(hour){
  if (hour > 12) {
    return hour % 12;
  }
  return hour;
}

function logDateFormat(date) {
  if (date == null || !(date instanceof(Date))){
    return "";
  }

  let y = date.getFullYear();
  let m = date.getMonth();
  let d = date.getDate();
  let h = String(normalizeHour(date.getHours())).padStart(2, '0');
  let min = String(date.getMinutes()).padStart(2, '0');
  let s = String(date.getSeconds()).padStart(2, '0');
  let ms = date.getMilliseconds();

  return {
    date: `${y}-${m}-${d}`,
    time: `${h}:${min}:${s}.${ms}`
  }
}

export { logDateFormat }