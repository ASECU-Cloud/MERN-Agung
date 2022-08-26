function Validator({ nama, telp, email, gender, alamat }) {
  let errors = {};

  let format = /[^a-zA-Z0-9 ]/;
  let formatResult = format.test(nama);
  // Check Nama
  if (!nama) {
    errors.erNama = "Nama tidak boleh kosong!";
  } else if (formatResult) {
    errors.erNama = "Nama tidak Valid!";
  }
  // Check Telepon
  if (!telp) {
    errors.erTelp = "No telp tidak Valid!";
  }

  // Check Email
  if (!email) {
    errors.erEmail = "Email tidak Valid!";
  }

  if (!gender) {
    errors.erGender = "Pilih salah satu!";
  }

  if (!alamat) {
    errors.erAlamat = "Cantumkan alamat!";
  }

  return errors;
}

export default Validator;
