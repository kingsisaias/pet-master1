import React from "react";
import { Header } from "./componentes/header";
import { ProductosListas } from "./componentes/productos/index";
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductosListas />
    </div>
  );
}

export default App;
