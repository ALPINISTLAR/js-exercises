alert(`!! ESLATMA: Ayrim natijalar faqat 'console'ga, ayrimlari esa 'console'ga ham ekrandagi bo'sh maydonga ham chiqadi!`)

function for_1() {
  let K = prompt(`Vazifa tavsifi: 'K' va 'N' butun sonlar berilgan (N>0). 'K' sonini 'N' marta chiqaruvchi programma tuzilsin.

  Natijalar faqat 'console'ga chiqadi.

  'K' sonni kiriting:`);
  let N = prompt(`'N' sonni kiriting:`)
  for (let i = 0; i < N; i++) {
    console.log(K);
  }
}


function for_2() {
  let A = prompt(`Vazifa tavsifi: 'A' va 'B' butun sonlar berilgan (A<B), A va B sonlar orasidagi barcha butun sonlarni (A va B ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi dastur tuzilsin.(A va B ham chiqarilsin)

  Natijalar faqat 'console'ga chiqadi.

  'A' sonni kiriting:`);
  let B = prompt(`'B' sonni kiriting:`);
  let chiqarilganSonlar = [];
  for (let i = A; i <= B; i++) {
    console.log(i);
    chiqarilganSonlar.push(i);
  }
  console.log('Chiqarilgan sonlar soni: '+ chiqarilganSonlar.length);
}

function for_3() {
  let A = prompt(`Vazifa tavsifi: 'A' va 'B' butun sonlar berilgan (A<B), A va B sonlar orasidagi barcha butun sonlarni (A va B dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi dastur tuzilsin.(A va B ham chiqarilsin)

  Natijalar faqat 'console'ga chiqadi.

  'A' sonni kiriting:`);
  let B = prompt(`'B' sonni kiriting:`);
  let chiqarilganSonlar = [];
  for (let i = B-1; i > A; i--) {
    console.log(i);
    chiqarilganSonlar.push(i);
  }
  console.log('Chiqarilgan sonlar soni: '+ chiqarilganSonlar.length);
}


function for_4(narxKg = prompt(`Vazifa tavsifi: 1 kg konfetning narxi berilgan (haqiqiy son), 1,2,3, ...., 10 kg konfetning narxini chiqaruvchi dastur tuzilsin!

Natija faqat 'console'ga chiqadi.

Konfet narxini kiriting:`)) {
  for (let kg = 1; kg <= 10; kg++) {
    let totalNarx = kg * narxKg;
    console.log(kg + " kg konfetning narxi: " + totalNarx + ` so'm`);
  }
}

function for_5(narxKg = prompt(`Vazifa tavsifi: 1 kg konfetning narxi berilgan (haqiqiy son), 0.1,0.2,0.3, ...., 1 kg konfetning narxini chiqaruvchi dastur tuzilsin!

Natija faqat 'console'ga chiqadi.

Konfet narxini kiriting:`)) {
  for (let kg = 0.1; kg <= 1; kg += 0.1) {
    let totalNarx = kg * narxKg;
    console.log(kg.toFixed(1) + " kg konfetning narxi: " + totalNarx.toFixed(2) + ` so'm`);
  }
}


function for_6(narxKg = prompt(`Vazifa tavsifi: 1 kg konfetning narxi berilgan (haqiqiy son), 1.2,1.4,1.6, ...., 2 kg konfetning narxini chiqaruvchi dastur tuzilsin!

Natija faqat 'console'ga chiqadi.

Konfet narxini kiriting:`)) {
  for (let kg = 1.2; kg <= 2; kg += 0.2) {
    let totalNarx = kg * narxKg;
    console.log(kg.toFixed(1) + " kg konfetning narxi: " + totalNarx.toFixed(2) + ` so'm`);
  }
}

function for_7() {
  let a = +prompt(`Vazifa tavsifi: a va b butun sonlar berilgan (a<b), a dan b gacha bo'lgan barcha butun  sonlar yig'indisini chiqaruvchi dastur tuzilsin!

  Natija 'console'ga ham ekranga ham chiqadi.

  'a' sonni kiriting:
  `);
  let b = +prompt(`'b' sonni kiriting:`);
  let yigindisi = 0;

  for (let i = a; i <= b; i++) {
    yigindisi += i;
  }

  document.getElementById("demo").innerHTML = (`Sonlar yig'indisi: ` + yigindisi);
  console.log("Butun sonlar yig'indisi:", yigindisi);
}


function for_8() {
  let a = +prompt(`Vazifa tavsifi: a va b butun sonlar berilgan (a<b), a dan b gacha bo'lgan barcha butun  sonlar ko'paytmasini chiqaruvchi dastur tuzilsin!

  Natija 'console'ga ham ekranga ham chiqadi.

  'a' sonni kiriting:
  `);
  let b = +prompt(`'b' sonni kiriting:`);
  let kopaytma = 1;

  for (let i = a; i <= b; i++) {
    kopaytma *= i;
  }

  document.getElementById("demo").innerHTML = (`Sonlar ko'paytmasi: ` + kopaytma);
  console.log("Butun sonlar ko'paytmasi:", kopaytma);
}


function for_9() {
  let a = +prompt(`Vazifa tavsifi: a va b butun sonlar berilgan (a<b), a dan b gacha bo'lgan barcha butun  sonlar kvadratlarining yig'indisini chiqaruvchi dastur tuzilsin!

  Natija 'console'ga ham ekranga ham chiqadi.

  'a' sonni kiriting:
  `);
  let b = +prompt(`'b' sonni kiriting:`);
  let yigindisi = 0;

  for (let i = a; i <= b; i++) {
    yigindisi += i * i;
  }
  document.getElementById("demo").innerHTML = (`Kvadratlarining yig'indisi: ` + yigindisi);
  console.log("Butun sonlar kvadratlarining yig'indisi:", yigindisi);
}


function for_10() {
  let n = prompt(`Vazifa tavsifi: 'n' butun soni berilgan (n>0), quyidagi yig'indini hisoblovchi dastur tuzilsin: S=1+1/2+1/3+......+1/n

  Natija 'console'ga ham ekranga ham chiqadi.

  'n'ni kiriting:
  `);
  let S = 0;

  for (let i = 1; i <= n; i++) {
    S += 1 / i;
  }
  document.getElementById("demo").innerHTML = (`Yig'indi: ` + S);
  console.log("Yig'indi:", S);
}


function for_11() {
  let n = prompt(`Vazifa tavsifi: 'n' butun soni berilgan (n>0), quyidagi yig'indini hisoblovchi dastur tuzilsin: S=n²+(n+1)²+(n+2)²+...(2*n)².

  Natija 'console'ga ham ekranga ham chiqadi.

  'n'ni kiriting:
  `);
  let S = 0;

  for (let i = n; i <= 2 * n; i++) {
    S += i * i;
  }

  document.getElementById("demo").innerHTML = (`Yig'indi: ` + S);
  console.log("Yig'indi:", S);
}


function for_12() {
  let n = prompt(`Vazifa tavsifi: 'n' butun soni berilgan (n>0), quyidagi ko'paytmani hisoblovchi dastur tuzilsin: S=1.1*1.2*1.3,...(n ta ko'payuvchi).

  Natija 'console'ga ham ekranga ham chiqadi.

  'n'ni kiriting:
  `);
  let S = 1;

  for (let i = 1.1; i <= n + 0.1; i += 0.1) {
    S *= i;
  }
  document.getElementById("demo").innerHTML = (`Ko'paytma: ` + S);
  console.log(`Ko'paytma:`, S);
}
