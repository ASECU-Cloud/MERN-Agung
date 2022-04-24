import SkillConst from "./SkillConst";



function Skills() {
    const links =[ 
        { link:"/img/html.png" ,id:1 },
        { link:"/img/css-3.png" ,id:2 },
        { link:"/img/js.png" ,id: 3}
    ]

    return ( 
        <div className="mt-9">
            <h2 className="text-3xl font-medium">Skills</h2>
            <SkillConst links = {links}/>               
        </div>            
       
     );
}

export default Skills;