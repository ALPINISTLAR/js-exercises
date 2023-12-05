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


// ===========================
function timer() {
  // Timer elementini tanlash
  var timerElement = document.getElementById('timer');
  // Input elementini tanlash
  var inputElement = document.getElementById('minute');

  // Start tugmasini bosganda ishlaydigan funksiya
  function startTimer() {
    // Input qiymatini yangilash
    var inputValue = parseInt(inputElement.value, 10);

    // Faqat to'g'ri qiymat kiritilganida ishga tushirish
    if (inputValue >= 1 && inputValue <= 60) {
      // Timer funksiyasini chaqirish
      setInterval(function () {
        updateTimer(inputValue);
      }, 1000);
    } else {
      alert('Invalid input. Please enter a number between 1 and 60.');
    }
  }

  // Pause tugmasini bosganda ishlaydigan funksiya
  function pauseTimer() {
    clearInterval(timerInterval);
  }

  // Reset tugmasini bosganda ishlaydigan funksiya
  function resetTimer() {
    // Input qiymatini timerElement qiymati bilan almashtirish
    timerElement.innerHTML = '00:00:00';
    // Input qiymatini qaytarish
    inputElement.value = '';
    // Intervalni to'xtatish
    clearInterval(timerInterval);
  }

  // Timer qiymatini yangilash uchun ishlaydigan funksiya
  function updateTimer(minutes) {
    // Soat, minut va sekundlar
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    var seconds = parseInt(timerElement.innerHTML.substring(6), 10);

    // Timer qiymatini yangilash
    if (minutes === 0 && seconds === 0) {
      // Timer to'xtaydi
      clearInterval(timerInterval);
    } else {
      // Sekundni 1 ga kamaytirish
      seconds -= 1;

      // Sekundlar 0 ga yetgandaysa, minutni 1 ga kamaytirish
      if (seconds < 0) {
        seconds = 59;
        remainingMinutes -= 1;
      }

      // Yangi timer qiymatini sozlash
      var newTimerValue =
        (hours < 10 ? '0' : '') +
        hours +
        ':' +
        (remainingMinutes < 10 ? '0' : '') +
        remainingMinutes +
        ':' +
        (seconds < 10 ? '0' : '') +
        seconds;

      // Timer elementini yangilash
      timerElement.innerHTML = newTimerValue;
    }
  }

  // Start, pause va reset tugmalarini tanlash
  var startButton = document.getElementById('start');
  var pauseButton = document.getElementById('pause');
  var resetButton = document.getElementById('reset');

  // Start tugmasi bosilganda startTimer funksiyasini chaqirish
  startButton.addEventListener('click', startTimer);

  // Pause tugmasi bosilganda pauseTimer funksiyasini chaqirish
  pauseButton.addEventListener('click', pauseTimer);

  // Reset tugmasi bosilganda resetTimer funksiyasini chaqirish
  resetButton.addEventListener('click', resetTimer);
}

// Timer funksiyasini chaqirish
timer();




function startCountdown() {
  var durationInput = document.getElementById('duration');
  var timerDisplay = document.getElementById('timer');

  // Foydalanuvchining kirgan vaqtini olamiz
  var duration = parseInt(durationInput.value, 10);

  if (isNaN(duration) || duration < 1) {
    alert(`Sekundlarni to'g'ri kiriting.`);
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