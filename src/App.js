import "./App.css";
import { data } from "./MockData";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*On mettra des routes vers les composants*/}
        <Route path="/" element={<Home data={data} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
