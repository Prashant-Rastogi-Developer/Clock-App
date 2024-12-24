const hourArror = document.getElementById("hour");
const minuteArrow = document.getElementById("min");
const secondArrow = document.getElementById("sec");

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hourRotation = 30 * hours + minutes / 2;
  const minutesRotation = 6 * minutes;
  const secondsRotation = 6 * seconds;
  hourArror.style.rotate = `${hourRotation}deg`;
  minuteArrow.style.rotate = `${minutesRotation}deg`;
  secondArrow.style.rotate = `${secondsRotation}deg`;
}, 1000);
