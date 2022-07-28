import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ShowStudent from "./components/ShowStudent/ShowStudent";
import AddStudent from "./components/AddStudent/AddStudent";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/add-student-details" element={<AddStudent />} />
      <Route exact path="/student-details" element={<ShowStudent />} />
    </Routes>
  </BrowserRouter>
);

export default App;
