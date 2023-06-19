import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./reel";
import "./index.css";
import { Loader } from "@react-three/drei";
import Reel from "./reel";
import CV from "./cv";
import Home from "./home";

 //studio.extend(extension);
 //studio.initialize();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Home/>
  </React.StrictMode>
);
