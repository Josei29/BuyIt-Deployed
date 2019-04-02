import React from "react";
import ItemSVG from "../../../../Icons/Item";

const item = (props) => {
    let priceStyle = {
        fontSize: "1.75rem",
        fontFamily: "'Julius Sans One', sans-serif",
        color: "#FF5335"
    };

    return (
        <div className="list__item__mobile" onClick={() => props.click(props.id)}>
            <ItemSVG />{props.name}
            <span style={priceStyle}>$</span>{props.price}
        </div>
    );
};

export default item;