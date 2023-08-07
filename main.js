function clock() {
  const today = new Date();
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  h.textContent = hour;
  m.textContent = minute;
  s.textContent = second;
}

setInterval(clock, 1000);

console.log();
