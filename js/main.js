alert('kamchiliklar bor hali, ayrimlariga kod yozilmagan')
// ** 1 **
function dastur_1() {
  let a = +prompt("Ushbu dastur butun son qabul qiladi. Agar son musbat bo'lsa 1 ga oshiradi, aks holda o'z holicha ekranga chiqaradi. Sonni kiriting:");
  if (a >= 1) {
    document.getElementById("demo").innerHTML = ++a;
  } else {
    document.getElementById("demo").innerHTML = a;
  }
}

// ** 2 **
function dastur_2() {
  let a = +prompt("Ushbu dastur butun son qabul qiladi. Agar son musbat bo'lsa 1 ga oshiradi, aks holda 2 ga kamaytiradi va ekranga chiqaradi. Sonni kiriting:");
  if (a >= 1) {
    document.getElementById("demo").innerHTML = ++a;
  } else {
    document.getElementById("demo").innerHTML = a - 2;
  }
}

// ** 3 **
function dastur_3() {
  let a = +prompt("Ushbu dastur butun son qabul qiladi. Agar son musbat bo'lsa 1 ga oshiradi, agar manfiy bo'lsa 2 ga kamaytiradi, agar 0 ga teng bo'lsa 10 ni o'zlashtiradi va ekranga chiqaradi. Sonni kiriting:");
  if (a >= 1) {
    document.getElementById("demo").innerHTML = ++a;
  } else if (a < 0) {
    document.getElementById("demo").innerHTML = a - 2;
  }
  else {
    document.getElementById("demo").innerHTML = 10;
  }
}

// ** 4 **
function dastur_4() {
  let a = +prompt("Ushbu dastur 3 ta butun son qabul qiladi. Va shu sonlar orasida nechta musbat sonlar borligini aniqlaydi. 1 - sonni kiriting:");
  let b = +prompt("2 - sonni kiriting:");
  let c = +prompt("3 - sonni kiriting:");
  if (a > b > c) {
    document.getElementById("demo").innerHTML = d + ' ta musbat son bor';
  } else if (a < 0) {

  }
  else {

  }
}



// ** 6 **
function dastur_6() {
  let a = +prompt("Ushbu dastur 2 ta butun son qabul qiladi. Va shu sonlarning kattasini aniqlaydi. 1 - sonni kiriting:");
  let b = +prompt("2 - sonni kiriting:")
  if (a > b) {
    document.getElementById("demo").innerHTML = a + ' > ' + b;
  } else if (a < b) {
    document.getElementById("demo").innerHTML = a + ' < ' + b;
  }
  else if (a = b) {
    document.getElementById("demo").innerHTML = a + ' = ' + b;
  }
  else {
    document.getElementById("demo").innerHTML = 'Raqam kiriting!';
  }
}

// ** 10 **
function dastur_10() {
  let a = +prompt("Ushbu dastur A va B butun sonlar qabul qiladi. Agar sonlar o'zaro teng bo'lmasa, A va B ning qiymati ularning yig'indisiga teng bo'ladi, agar sonlar teng bo'lsa 0 ni o'zlashtiradi va ekranga chiqaradi. A sonni kiriting:");
  let b = +prompt("B sonni kiriting:");
  let c = a + b;
  if (a != b) {
    document.getElementById("demo").innerHTML = 'A = ' + c + ', B = ' + c;
  }
  else {
    document.getElementById("demo").innerHTML = 0;
  }
}
// ** 11 **
function dastur_11() {
  let a = +prompt("Ushbu dastur A va B butun sonlar qabul qiladi. Agar sonlar o'zaro teng bo'lmasa, A va B ning qiymati ularning eng kattasiga teng bo'ladi, agar sonlar teng bo'lsa 0 ni o'zlashtiradi va ekranga chiqaradi. A sonni kiriting:");
  let b = +prompt("B sonni kiriting:");
  if (a != b) {
    document.getElementById("demo").innerHTML = 'A = ' + c + ', B = ' + c;
  }
  else {
    document.getElementById("demo").innerHTML = 0;
  }
}