import React from "react";
import "./ProductTitle.css";

const ProductTitle = ({ title }) => {
    return (
        <div id={title.id} className="Product-Title">{title.name}</div>
    )
}

export {ProductTitle}