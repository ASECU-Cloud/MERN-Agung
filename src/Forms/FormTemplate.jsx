import Validator from "./Validator";
import { useSelector, useDispatch } from "react-redux";

function FormTemplate() {
  // const selector = useSelector();
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    var nama = document.getElementById("Nama").value;
    var telp = document.getElementById("Telp").value;
    var email = document.getElementById("email").value;
    var gender =
      document.getElementById("gender").options[
        document.getElementById("gender").selectedIndex
      ].value;

    var alamat = document.getElementById("alamat").value;
    let password = Math.floor(Math.random() * 10001);
    let data = { nama, telp, email, gender, alamat, password };
    // let valid = Validator(data);

    // if (Object.values(valid).length) {
    // setErrDisp(valid);
    //   return;
    // }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="text-cyan-800 font-bold text-base flex flex-col space-y-2"
      >
        <label htmlFor="Nama">
          Nama Lengkap :
          <input
            id="Nama"
            type="Nama"
            className="focus:outline-blue-700 rounded"
          />
        </label>
        <p className="text-sm font-normal text-red-600"></p>
        <label htmlFor="Telp">
          Nomer WhatsApp :
          <input
            type="text"
            name="Telp"
            id="Telp"
            className="focus:outline-blue-700 rounded"
          />
        </label>
        <p className="text-sm font-normal text-red-600"></p>

        <label htmlFor="email">
          E-Mail :
          <input
            id="email"
            type="email"
            className="focus:outline-blue-700 rounded"
          />
        </label>
        <p className="text-sm font-normal text-red-600"></p>
        <label htmlFor="gender">
          Jenis Kelamin :
          <select
            name="gender"
            id="gender"
            className="focus:outline-blue-700 rounded"
            defaultValue={""}
          >
            <option value="" hidden disabled>
              Choose
            </option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
        </label>
        <p className="text-sm font-normal text-red-600"></p>
        <label htmlFor="alamat">
          Alamat :
          <input
            id="alamat"
            type="textarea"
            className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:outline-blue-700"
          />
        </label>
        <p className="text-sm font-normal text-red-600"></p>

        <button className="px-6 py-2.5 bg-cyan-700 text-white font-bold rounded-xl w-auto uppercase">
          Daftar
        </button>
      </form>
    </div>
  );
}

export default FormTemplate;
