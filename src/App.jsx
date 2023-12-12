import {MainFrame} from "./MainFrame";
import Frame from "./Frame"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={MainFrame} />
          <Route path="/offers" Component={Frame} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
