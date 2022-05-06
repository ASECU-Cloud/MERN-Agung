function SkillConst({links}) {
    
    return ( 
        <div className="flex justify-around flex-wrap">
            {links.map((link) =>(
                <div className=" card m-3 px-14 py-3 drop-shadow-lg flex flex-col items-center " key={link.id}>
                    <img  src={link.link} alt="tes" className="w-8" />
                    <p>{link.text}</p>
                </div>
            ))}        
        </div>
     );
}

export default SkillConst;