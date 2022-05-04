import { useState } from "react";
import Validator from "./Validator";

function FormTemplate({setUserData,userData}) {
	
	const [nama,setNama] = useState('');
	const [telp,setTelp] = useState('');
	const [email,setEmail] = useState('');
	const [gender,setGender]= useState('')
	const [alamat,setAlamat] =useState('')
    const [errDisp,setErrDisp] =useState({})
    
    
	const handleSubmit = (e) =>{
		e.preventDefault()
        let password = Math.floor(Math.random()*10001)
        let data = {nama,telp,email,gender,alamat,password}
        let valid = Validator(data)
        
        if (Object.values(valid).length) {
            setErrDisp(valid)
            return
        }
        
        let strData = JSON.stringify(data,undefined,4)
        setUserData(userData=[...userData,JSON.parse(strData)])
		setNama('')
		setTelp('')
		setEmail('')
		setGender('')
		setAlamat('')
        setErrDisp('')
	}

    // useEffect(()=>{
    //     console.log(errDisp[0].erNama);
    // },[errDisp])

    return ( 
        <div>
        <form onSubmit={handleSubmit} className="text-cyan-800 font-bold text-base flex flex-col space-y-2">
            <label htmlFor="Nama">
                Nama Lengkap : 
                <input 
                    id="Nama" 
                    type="Nama" 
					value={nama}
					onChange={(e)=>setNama(e.target.value)}
                    className="focus:outline-blue-700 rounded"
                    />
            </label>
			<p className="text-sm font-normal text-red-600">{errDisp.erNama}</p>
            <label htmlFor="Telp">
                Nomer WhatsApp : 
                <input 
                    type="text" 
                    name="Telp" 
                    id="Telp" 
					value={telp}
                    onChange={(e)=>setTelp(e.target.value)}
                    className="focus:outline-blue-700 rounded"
                    
					/>
            </label>
            <p className="text-sm font-normal text-red-600">{errDisp.erTelp}</p>
            
            <label htmlFor="email">
                E-Mail : 
                <input 
                    id="email" 
                    type="email" 
					value={email}
					onChange={(e)=>setEmail(e.target.value)}
                    className="focus:outline-blue-700 rounded"
                    
                    />
            </label>
			<p className="text-sm font-normal text-red-600">{errDisp.erEmail}</p>
            <label htmlFor="gender">Jenis Kelamin : 
            <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}  className="focus:outline-blue-700 rounded">
                <option value="" hidden disabled>Choose</option>
                <option value="pria">Pria</option>
                <option value="wanita">Wanita</option>
            </select>
			</label>
			<p className="text-sm font-normal text-red-600">{errDisp.erGender}</p>
            <label htmlFor="alamat">
                Alamat : 
                <input 
                    id="alamat" 
                    type="textarea" 
					value={alamat}
					onChange={(e)=>setAlamat(e.target.value)}
                    
                    className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:outline-blue-700"/>
            </label>
			<p className="text-sm font-normal text-red-600">{errDisp.erAlamat}</p>
			
            <button className="px-6 py-2.5 bg-cyan-700 text-white font-bold rounded-xl w-auto uppercase">Daftar</button>
        </form>
        <div id="login" className=""></div>
        </div>
     );
}

export default FormTemplate;