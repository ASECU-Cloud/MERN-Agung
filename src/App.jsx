import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Front from "./Front";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route
          path="*"
          element={
            <div className="text-center py-72 h-screen">
              <h1 className="text-2xl font-bold">404 - NOT FOUND</h1>
              <p>
                Return to{" "}
                <Link to={"/"} className="underline">
                  Home Page
                </Link>
              </p>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
