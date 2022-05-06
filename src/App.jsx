
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Handler from "./Forms/Handler";

import Wrap from "./Portofolio/Wrap";


function App() {
    return(
    <Router>
        <nav className="absolute z-50 font-bold text-xl">
            <Link to={'/'}>Portofolio</Link>
            <Link to={'/forms'}>Forms</Link>
        </nav>
        <Routes>
            {/* <Route path="/" element={<Front/>}></Route> */}
            <Route path="/" element={<Wrap/>}></Route>
            <Route path="/forms" element={<Handler/>}></Route>
            <Route path="*" element={
                <div className="text-center py-72 h-screen">
                    <h1 className="text-2xl font-bold">404 - NOT FOUND</h1>
                    <p>Return to <Link to={'/'} className="underline">Home Page</Link></p>
                </div>
            }></Route>
        </Routes>
    </Router>
    )
}

export default App;