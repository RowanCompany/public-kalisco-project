import React from "react";
import { useParams } from "react-router-dom";
import ProductKatsu from "./ProductKatsu";
import ProductSauce from "./ProductSauce";

function ProductDetailContent() {
    const { content } = useParams();
    return <ProductDetailCaseRenderer content={content} />;
}

function ProductDetailCaseRenderer({ content }) {
    switch (content) {
        case "katsu":
            return <ProductKatsu content={content} />;
        case "sauce":
            return <ProductSauce content={content} />;
        default:
            return <React.Fragment />;
    }
}

export default ProductDetailContent;
