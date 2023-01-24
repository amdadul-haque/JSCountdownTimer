const hourSpan = document.getElementById("hour")
const minSpan = document.getElementById("min")
const secSpan = document.getElementById("sec")

const secInput = document.getElementById("secInput")
const minInput = document.getElementById("minInput")
const hourInput = document.getElementById("hourInput")

const startBtn = document.querySelector(".startBtn")


var countDownValue = 0;

const countDownTimer = () => {
  countDownValue--;
  let hour = Math.floor(countDownValue / 3600)
  let min = Math.floor((countDownValue / 60)) % 60;
  let sec = Math.floor(countDownValue % 60);

  secSpan.innerHTML = sec < 10 ? `0${sec}` : sec
  minSpan.innerHTML = min < 10 ? `0${min}` : min
  hourSpan.innerHTML = hour < 10 ? `0${hour}` : hour


  console.log(typeof (parseInt(secInput.value)))

}

const startTimer = () => {
  const timer = setInterval(() => {
    if (countDownValue <= 0) {
      clearInterval(timer)
    }
    else {
      countDownTimer()
    }
    console.log(countDownValue)
  }, 1000);
}

startBtn.addEventListener("click", () => {
  countDownValue = (parseInt(secInput.value) + parseInt(minInput.value) * 60 + parseInt(hourInput.value) * 3600);
  startTimer()
})

