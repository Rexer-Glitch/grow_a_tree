import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/grow" element={<Main />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
