import React from "react";
import ProductBanner from "./ProductBanner";
import { useParams } from "react-router-dom";
import ProductHomemade from "./ProductHomemade";

function ProductContent() {
    const { subject } = useParams();
    return (
        <>
            <ProductBanner subject={subject} />
            <ProductCaseRenderer subject={subject} />
        </>
    );
}

function ProductCaseRenderer({ subject }) {
    switch (subject) {
        case "homemade":
            return <ProductHomemade />;
        case "my-own-recipe":
            return <div>hi</div>;
        default:
            return <React.Fragment />;
    }
}

export default ProductContent;
