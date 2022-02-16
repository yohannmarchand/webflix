import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;