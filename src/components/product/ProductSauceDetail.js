import React from "react";
import ProductDetailNavigator from "./ProductDetailNavigator";
import styles from "./product.module.scss";
import { useParams, Redirect } from "react-router-dom";
import SauceNavigator from "./SauceNavigator";


function ProductSauceDetail({ content }) {
    const { sauce } = useParams();

    switch (sauce) {
        case "spicy-creem":
        case "green-onion":
            window.alert("레시피 준비중 입니다!");
            return <Redirect to="/products/homemade/sauce" />;
        default:
            return (
                <>
                    <section className={styles.sauceDetailFristSection}>
                        <ProductDetailNavigator content={content} />
                        <SauceNavigator sauce={sauce} />
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </section>
                </>
            );
    }
}

export default ProductSauceDetail;
