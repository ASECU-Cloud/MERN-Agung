import { useState } from "react";
import FormTemplate from "./FormTemplate";
import Preview from "./Preview";

function Handler() {
  const [userData, setUserData] = useState([]);
  return (
    <div className="flex gap-x-2 flex-wrap">
      <div className="w-full lg:flex-1 bg-blue-300 p-4">
        <p className="font-bold text-2xl text-cyan-800 pb-2">
          Form Pendaftaran EDUWORK Pelajar
        </p>
        <FormTemplate setUserData={setUserData} userData={userData} />
      </div>
      <div className="w-full lg:flex-1 flex-none bg-cyan-600">
        <Preview userData={userData} />
      </div>
    </div>
  );
}

export default Handler;
