import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Movie from "./Movie";
import Favorite from "./Favourite";

function App() {
    return (
        <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/movies/:id" element={<Movie/>}/>
                        <Route path="/favorite" element={<Favorite/>}/>
                    </Routes>
                </main>
        </BrowserRouter>
    );
}

export default App;