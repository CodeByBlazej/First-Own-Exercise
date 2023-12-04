// const clock = document.querySelector('clock');

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerHTML = timeString;
}

setInterval(updateClock, 1000);
