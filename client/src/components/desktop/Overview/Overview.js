import React from "react";
import Header from "./Header/Header";
import NewList from "./NewList/NewList";
import Lists from "./Lists/Lists";

const overview = (props) => {
    return(
        <div style={{backgroundColor: "#DFE0D4", minHeight: "100vh"}}>
            <Header />
            <NewList {...props} />
            <hr />
            <Lists {...props} />
        </div>
    );
};

export default overview;