import React from "react";
import { useParams } from "react-router-dom";
import ProductKatsu from "./ProductKatsu";

function ProductDetailContent() {
    const { content } = useParams();
    return <ProductDetailCaseRenderer content={content} />;
}

function ProductDetailCaseRenderer({ content }) {
    switch (content) {
        case "katsu":
            return <ProductKatsu content={content} />;
        case "sauce":
            return <div>hi</div>;
        default:
            return <React.Fragment />;
    }
}

export default ProductDetailContent;
