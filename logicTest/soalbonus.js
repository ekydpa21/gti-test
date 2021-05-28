// Lengkapi fungsi dibawah agar dapat memproses variable di bawah ini dengan menggunakan minimal 1 loop

const a = {
  auth: {
    do: "create",
    hirarchy: {
      child: "biodata",
    },
    username: "admin",
    password: "adminpassword",
  },
};

const b = {
  biodata: {
    do: "create",
    hirarchy: {
      parent: "auth",
      child: "identifier",
    },
    alamat: "Jalan Gede Sebelah",
    kelamin: "L",
    tanggal_registrasi: "", //(Tanggal Hari Ini)
  },
};

const c = {
  identifier: {
    do: "create",
    hirarchy: {
      parent: "biodata",
    },
    jenis: "KTP",
    deskripsi: "1234567890123456",
  },
};

const d = {
  identifier: {
    do: "create",
    hirarchy: {
      parent: "biodata",
    },
    jenis: "SIM",
    deskripsi: "1234567890123456",
  },
};

// Menjadi seperti ini didalam variable result. Munculkan menggunakan console.log()
// {
//   "auth": {
//     "do": "create",
//     "username": "admin",
//     "password": "adminpassword",
//     "biodata": {
//       "do": "create",
//       "alamat": "Jalan Gede Sebelah",
//       "kelamin": "L",
//       "tanggal_registrasi": (Tanggal Hari Ini)
//       "identifier": [
//         {
//           "do": "create",
//           "jenis": "KTP",
//           "deskripsi": "1234567890123456"
//         },
//         {
//           "do": "create",
//           "jenis": "SIM",
//           "deskripsi": "1234567890123456"
//         },
//       ]
//     }
//   }
// }

// Extra Point : Menggunakan recursive, hanya menggunakan 1 loop
// Semua variable yang sudah di declare harus dipakai dan tidak dapat dikurangi.

let result;
let process = { constructor: [a, b, c, d] };

const generate = (colOfArr, parent = null, child = null) => {
  let processed;
  // console.log(typeof colOfArr.constructor);
  if (colOfArr.constructor !== Array)
    return console.log("colOfArr must be an array");
  const separatorArr = ["auth", "biodata", "identifier"];

  // Do something here

  console.log(colOfArr.constructor);
};

generate(process);
