import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";

const App = () => (
  <div>
    <Header />
    <p>Microfrontend Header App</p>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
