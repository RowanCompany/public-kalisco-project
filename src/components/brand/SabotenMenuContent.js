import React, { useState } from "react";
import Footer from "../Footer";
import styles from "./saboten.module.scss";
import SabotenBanner from "./SabotenBanner";
import { useParams } from "react-router-dom";
import CategoryLink from "../categoryButton/CategoryLink";
import HibarnMenuData from "./HibarinMenuData";
import MenuPanel from "./panel/MenuPanel";

function HibarinMenuContent() {
    const params = useParams();
    const categoryData = [
        {
            text: "Katsu",
            type: "katsu",
            link: "/brand/saboten/menu/katsu",
        },
        {
            text: "Donburi",
            type: "donburi",
            link: "/brand/saboten/menu/donburi",
        },
        {
            text: "Noodles",
            type: "noodles",
            link: "/brand/saboten/menu/noodles",
        },
        {
            text: "Side",
            type: "side",
            link: "/brand/saboten/menu/side",
        },
    ];
    const [category, setCategory] = useState(
        params.menu ? params.menu : "katsu"
    );

    return (
        <>
            <SabotenBanner subject={params.subject} />
            <section className={styles.menuDetailSection}>
                <div className={styles.categoryButtonListWrapper}>
                    {categoryData.map((d, i) => (
                        <CategoryLink
                            key={i}
                            {...d}
                            parentType={category}
                            clickEvent={() => setCategory(d.type)}
                        />
                    ))}
                </div>
                {/* TODO: Modal 제작해야 함 */}
                <div className="container">
                    <div className={styles.menuDetailPanelWrapper}>
                        {HibarnMenuData[category] &&
                            HibarnMenuData[category].map((d, i) => (
                                <MenuPanel key={i} {...d} />
                            ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HibarinMenuContent;
