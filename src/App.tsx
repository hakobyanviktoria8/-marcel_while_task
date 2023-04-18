import { NavBar } from "./components/NavBar";
import { Products } from "./components/Products";
import { Users } from "./components/Users";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
