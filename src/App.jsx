import './css/App.css';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/Home"
          element={
            <Home></Home>
          }
        />
        <Route
          path="/my-app"
          element={
            <Home></Home>
          }
        />
      </Routes>
    </>
  );
}

export default App;
