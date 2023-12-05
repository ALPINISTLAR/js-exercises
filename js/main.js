let = interval;
function changeBackgroundColor() {
  const colorInput1 = document.getElementById('colorInput1').value;
  const colorInput2 = document.getElementById('colorInput2').value;
  const colorInput3 = document.getElementById('colorInput3').value;
  const timeInput = document.getElementById('timeInput').value;

  let currentIndex = 0;

  interval = setInterval(function () {
    const colors = [colorInput1, colorInput2, colorInput3];
    document.body.style.background = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }, timeInput);
}

function stop() {
  clearInterval(interval);
}


const timer = document.getElementById('timer');
const sekundomer = document.getElementById('sekund').value;

function sekund() {
  timer.innerHTML = '3';
}