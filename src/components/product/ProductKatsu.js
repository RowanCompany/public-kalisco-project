import React from "react";
import styles from "./product.module.scss";
import ProductDetailNavigator from "./ProductDetailNavigator";
import katsuImage from "../../static/images/img-hmr-katsu.png";

function ProductKatsu({ content }) {
    return (
        <section className={styles.katsuSection}>
            <ProductDetailNavigator content={content} />
            <div className="text-center">
                <img src={katsuImage} alt="Katsu Image" className="img-fluid" />
            </div>
        </section>
    );
}

export default ProductKatsu;
