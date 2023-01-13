import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DAO from "./DAO";
import Home from "./Home";
import About from "./About";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "../components/header";

const link = [{ link: "./DAO", label: "DAO" }];
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      
        <HeaderSimple links={link}></HeaderSimple>

    </MantineProvider>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
