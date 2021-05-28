// Lengkapi function di bawah agar dapat memunculkan bentuk sebagai berikut. Munculkan menggunakan console.log()
// -----=-----
// ----=-=----
// ---=---=---
// --=-----=--
// -=-------=-
// =---------=
// -=-------=-
// --=-----=--
// ---=---=---
// ----=-=----
// -----=-----

// Extra Point : Pengecheckan bila inputan yang diisi tidak dapat di proses.

const generate = (limit) => {
  // Do something here
  if (limit % 2 === 0 || !limit) {
    console.log("Hanya dapat diproses jika memasukkan angka ganjil");
  } else {
    let mid = Math.ceil(limit / 2);
    for (let i = 1; i <= limit; i++) {
      let result = "";
      if (i <= mid) {
        for (let j = 1; j <= limit; j++) {
          if (i === 1) {
            if (j === mid) {
              result += "=";
            } else {
              result += "-";
            }
          } else if (j === mid - i + 1 || j === mid + i - 1) {
            result += "=";
          } else {
            result += "-";
          }
        }
      } else {
        for (let k = 1; k < mid; k++) {
          if (k === i - mid + 1) {
            result += "=";
          } else {
            result += "-";
          }
        }

        for (let l = mid; l >= 1; l--) {
          if (i === limit) {
            if (l === mid) {
              result += "=";
            } else {
              result += "-";
            }
          } else if (l === i - mid + 1) {
            result += "=";
          } else {
            result += "-";
          }
        }
      }
      console.log(result);
    }
  }
};

generate(11);
