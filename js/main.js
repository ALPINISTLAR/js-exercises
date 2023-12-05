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



// =====================
function startCountdown() {
  var durationInput = document.getElementById('duration');
  var timerDisplay = document.getElementById('timer');

  // Foydalanuvchining kiritgan vaqtini olamiz
  var duration = parseInt(durationInput.value, 10);

  if (isNaN(duration) || duration < 1) {

    timerDisplay.textContent = `Soniya kiriting.`;
    return;
  }

  // Taimerni har 1000 millisekundda bir yangilash
  countdown = setInterval(function() {
    timerDisplay.textContent = duration + ' soniya';

    // Vaqtni kamaytiramiz
    duration--;

    // Vaqt 10 dan past bo'lsa rangni qizil qilamiz
    if (duration < 10) {
      timerDisplay.style.color = 'red';
    }

    // Vaqt tugaganda timer ni to'xtatamiz
    if (duration < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = 'Vaqt tugadi!';
    }
  }, 1000);
}

function pauseCountdown() {
  clearInterval(countdown);
  var timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = 'Taymer to\'xtatildi.';
}