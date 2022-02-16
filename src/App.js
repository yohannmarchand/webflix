import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Movie from "./Movie";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies/:id" element={<Movie/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;