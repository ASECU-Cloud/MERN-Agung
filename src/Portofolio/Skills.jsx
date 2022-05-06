import SkillConst from "./SkillConst";



function Skills() {
    const links =[ 
        { link:"/img/html.png" ,id:1,text:"HTML 5" },
        { link:"/img/css-3.png" ,id:2,text:"CSS 3"  },
        { link:"/img/python.png" ,id:3,text:"Python"  },
        { link:"/img/php.png" ,id:4,text:"PHP"  },
        { link:"/img/js.png" ,id:5,text:"JavaScript"}
    ]

    return ( 
        <div className="mt-9">
            <h2 className="text-3xl font-medium">Skills</h2>
            <SkillConst links = {links}/>               
        </div>            
       
     );
}

export default Skills;