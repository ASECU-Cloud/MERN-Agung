function SkillConst({links}) {
    
    return ( 
        <div className="flex justify-around">

            {links.map((link) =>(
                <div className="card m-3 px-14 py-3 drop-shadow-lg" key={link.id}>
                    <img  src={link.link} alt="tes" className="w-6" />
                </div>
            ))}        
        </div>
     );
}

export default SkillConst;