function for_1() {
let K = prompt(`Vazifa tavsifi: 'K' va 'N' butun sonlar berilgan (N>0). 'K' sonini 'N' marta chiqaruvchi programma tuzilsin.

Natijalar console ga chiqadi.

'K' sonni kiriting:`);
let N = prompt(`'N' sonni kiriting:`)
  for (let i = 0; i < N; i++) {
      console.log(K);
  }
}


function for_2() {
  let A = prompt(`Vazifa tavsifi: 'A' va 'B' butun sonlar berilgan (A<B), A va B sonlar orasidagi barcha butun sonlarni (A va B ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi dastur tuzilsin.(A va B ham chiqarilsin)

  Natijalar console ga chiqadi.

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

  Natijalar console ga chiqadi.

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

Natija console ga chiqadi.

Konfet narxini kiriting:`)) {
  for (let kg = 1; kg <= 10; kg++) {
      let totalNarx = kg * narxKg;
      console.log(kg + " kg konfetning narxi: " + totalNarx + ` so'm`);
  }
}

function for_5(narxKg = prompt(`Vazifa tavsifi: 1 kg konfetning narxi berilgan (haqiqiy son), 0.1,0.2,0.3, ...., 1 kg konfetning narxini chiqaruvchi dastur tuzilsin!

Natija console ga chiqadi.

Konfet narxini kiriting:`)) {
  for (var kg = 0.1; kg <= 1; kg += 0.1) {
      var totalNarx = kg * narxKg;
      console.log(kg.toFixed(1) + " kg konfetning narxi: " + totalNarx.toFixed(2) + ` so'm`);
  }
}
