import Biografi from "./parts/Biografi";
import Header from "./parts/Header";
import Skills from "./parts/Skills";



function App() {
    return ( 
    <div className="container mx-auto">
        <Header></Header>
        <Biografi></Biografi>
        <Skills></Skills>
    </div> );
}

export default App;