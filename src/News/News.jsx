import { Link } from "react-router-dom";

function News() {
    return ( 
        <div>
            <div className="relative bg-cyan-500 p-3 flex justify-between text-white font-extrabold text-xl items-center">
                <div>
                    <h1 className="text-3xl">Mern-Agung</h1>
                    <span>News Finder</span>
                </div>
                <div>
                    <Link to={"/"} >Go Back</Link>
                </div>
            </div>
            <div className="flex">
                <div className="w-72 bg-red-400 md:block hidden">Sidebar</div>
                <div>News Content</div>
            </div>
        </div>
     );
}

export default News;