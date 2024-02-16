// Login

function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let failed = document.getElementById("failed");
  if (username == "admin" && password == "12345") {
    return true;
  } else {
    failed.innerHTML = "⚠️Invalid username or password.";
    failed.style.color = "red";
    return false;
  }
}

function displayDate() {
  let showDate = document.getElementById("date");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date();

  let day = date.getDay();
  let month = date.getMonth();
  let dat = date.getDate();

  let dd = dat < 10 ? "0" + dat : dat;

  let dateNow = days[day] + ", " + months[month] + " " + dd;
  showDate.innerText = dateNow;
}
displayDate();

function displayTime() {
  let showTime = document.getElementById("time");
  let currentDate = new Date();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let time =
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  showTime.innerText = time;
}

setInterval(displayTime, 1000);

displayTime();
