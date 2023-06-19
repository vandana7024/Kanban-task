import React, { useState } from "react";
import DashBoard from "./pages/DashBoard/DashBoard";
import Navbar from "./components/MyComponents/Navbar";
import Sidebar from "./components/MyComponents/Sidebar";

function App() {
  return (
    <>
      <div>
        <div className="flex w-full">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar />
            <div className="flex flex-1 justify-center items-center">
              <DashBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
