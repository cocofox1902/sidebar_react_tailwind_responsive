import React, { useState } from "react";
import "./index.css";
import { navbarData } from "./ListNavbar";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isOpen ? (
        true
      ) : (
        <nav className="bg-gray-500 bg-opacity-40 absolute top-0 left-0 w-full h-screen">
          <div className="px-4 py-2 flex flex-col h-full w-48 bg-gray-800">
            <div className="flex justify-center items-center">
              <h1 className="text-white font-bold text-3xl">Logo</h1>
              <button
                className="text-white text-4xl focus:outline-none ml-2"
                onClick={toggleSidebar}
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center justify-evenly h-full text-lg font-semibold">
              {navbarData.map((item, index) => (
                <a
                  key={index}
                  href={item.Link}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  {item.Title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
      <button className="text-3xl font-bold underline mt-4" onClick={toggleSidebar}>
        Click
      </button>
    </div>
  );
}

export default App;
