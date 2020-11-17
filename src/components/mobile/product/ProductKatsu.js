import React from "react";
import styles from "./mobile_product.module.scss";
import ProductDetailNavigator from "./ProductDetailNavigator";
import katsuImage from "../../../static/images/img-hmr-katsu.png";

export default function ProductKatsu({ content }) {
  return (
    <section className={styles.productKatsuSection}>
      <ProductDetailNavigator content={content} />
      <div>
        <img src={katsuImage} alt="Katsu" className="img-fill" />
      </div>
    </section>
  );
}
