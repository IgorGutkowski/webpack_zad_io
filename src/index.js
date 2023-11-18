import React from "react";
import { createRoot } from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import browserData from "./data/browsers.json"; // Assuming you have a file with browser data

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <Navigation />
        <Section browsers={browserData} />
        <Footer />
    </>
);
