import React, { useEffect } from "react";
import Chat from "./components/Chat";
import Menu from "./components/Menu";

function App() {
  useEffect(() => {
    const checkScreenSize = () => {
      const menu = document.querySelector('.menuContainer');
      if (window.matchMedia("(max-width: 900px)").matches) {
        if (menu.classList.contains('active')) {
          menu.classList.toggle('active');
        }
      } else {
        if (!menu.classList.contains('active')) {
          menu.classList.add('active');
        }
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Menu />
        <Chat />
      </div>
    </div>
  );
}

export default App;
