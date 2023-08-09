import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent.tsx";
import MainPage from "./pages/MainPage.tsx";
import EditPage from "./pages/EditPage.tsx"
function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit" element={<EditPage />} />
        {/* <Route path="/delete" element={<DeletePage />} /> */}
        {/* <Route path="/add" element={<AddPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
