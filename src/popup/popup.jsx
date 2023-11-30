import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./global.css"

const container = document.getElementById("app-react-target");
const root = createRoot(container);
root.render(<App tab="home" />);
