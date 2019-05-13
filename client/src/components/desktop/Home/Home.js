import React from "react";
import Header from "./Header/Header";
import Description from "./Description/Description";
import Footer from "./Footer/Footer";

const home = (props) => (
    <div>
        <Header {...props} />
        <Description />
        <Footer />
    </div>
);

export default home;