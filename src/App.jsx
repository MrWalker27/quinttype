import "./css/App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Bold from "./components/Bold";
import Ahead from "./components/Ahead";
import Metype from "./components/Metype";
import Accesstype from "./components/Accesstype";
import Content from "./components/Content";
import Header from "./components/Header";
import Demo from "./components/Demo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>{ Header()}</div>
      <Routes>
        <Route path="/Home" element={<Home></Home>} />
        <Route path="/my-app" element={<Home></Home>} />
        <Route path="/products/Bold" element={<Bold></Bold>} />
        <Route path="/products/Ahead" element={<Ahead></Ahead>} />
        <Route path="/products/Metype" element={<Metype></Metype>} />
        <Route path="/products/Accesstype" element={<Accesstype></Accesstype>} />
        <Route path="/products/Content" element={<Content></Content>} />
        <Route path="/Demo" element={<Demo></Demo>} />
      </Routes>
      <div>{Footer()}</div>
    </>
  );
}

export default App;
