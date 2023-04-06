// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Canvas from "./canvas";
import Customizer from "./pages/customizer";
import Home from "./pages/home";

function App() {
  return (
    <main className="app transition-allease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
