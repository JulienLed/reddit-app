import "./App.css";
import { useState } from "react";
import { data } from "./MockData";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/*On mettra des routes vers les composants*/}
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              data={data}
              category={category}
              setCategory={setCategory}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
