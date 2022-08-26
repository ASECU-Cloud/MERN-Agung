import { useSelector } from "react-redux";

function Preview() {
  return (
    <div className="p-4 text-white">
      <h2 className="pb-2 font-bold text-2xl">Preview Area</h2>

      <div id="data" className="bg-slate-900 rounded-lg px-2 py-1 ">
        <p>[{useSelector((state) => state.form.data[0])}]</p>
      </div>
    </div>
  );
}

export default Preview;
