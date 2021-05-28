// Lengkapi function di bawah agar dapat memunculkan deret sebagai berikut tanpa menggunakan loop. Munculkan menggunakan console.log()
// 1
// 3
// 5
// 7
// 11
// 13
// 15
// 17
// 19

// Clue : Recursive
// Extra Point : Munculkan hanya bilangan primer

const generate = (max) => {
  // Do Something Here
  if (max > 1) {
    generate(max - 1);
  }

  if (max > 1) {
    if (max === 2 || max === 3 || max === 5 || max === 7 || max === 11) {
      console.log(max);
    } else if (
      max % 2 !== 0 &&
      max % 3 !== 0 &&
      max % 5 !== 0 &&
      max % 7 !== 0 &&
      max % 11 !== 0
    ) {
      console.log(max);
    }
  }
};

generate(100);
