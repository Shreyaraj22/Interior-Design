import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import InfoPage from "./components/InfoPage";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import OurWork from "./Pages/OurWork"
import About from "./Pages/About"
import Practice from "./Pages/Practice"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Practice",
    element: <Practice />,
  },
   {
    path: "/contact",
    element: <Contact />,
  },
   {
    path: "/work",
    element: <OurWork />,
  },
]);

function App() {
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
}

export default App;
