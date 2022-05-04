function Preview({userData}) {
    

    return ( 
        <div className="p-4 text-white">
            <h2 className="pb-2 font-bold text-2xl">Preview Area</h2>

            <div id="data" className="bg-slate-900 rounded-lg px-2 py-1 ">
                <pre className="whitespace-pre">
                    

                    {/* {'{\n   nama: "john doe",\n   telp: "Done",\n   email: "agunglioko@gmail.com",\n   gender: "pria",\n   alamat: "Ngagel Tirto v no 21"\n}'} */}
                    {JSON.stringify(userData,undefined,4)}
                    
                </pre>
            </div>
        </div>
     );
}

export default Preview;