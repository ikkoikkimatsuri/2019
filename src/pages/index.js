import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import News from "../components/News";
import Detail from "../components/Detail";
import Image from "../components/Image";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <News />
    <Detail />
    <Image />
    <Footer />
  </div>
);

export default IndexPage;
