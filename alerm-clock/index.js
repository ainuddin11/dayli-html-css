const display = document.getElementById("clock");
const audio = new Audio("./alarm.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function upDateTime() {
  const date = new Date();

  const hour = setTime(date.getHours());
  const minutes = setTime(date.getMinutes());
  const second = setTime(date.getSeconds());
  display.innerText = `${hour} : ${minutes} : ${second}`;
  console.log(`${hour} : ${minutes} : ${second}`);
}

function setTime(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);
    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert("alerm set");
    }
  }
}

function clearAlerm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("clear alarm");
  }
}

setInterval(upDateTime, 1000);
