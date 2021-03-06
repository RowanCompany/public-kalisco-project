import React, { useState } from "react";
import Footer from "../Footer";
import styles from "./saboten.module.scss";
import SabotenBanner from "./SabotenBanner";
import { useParams } from "react-router-dom";
import CategoryLink from "../categoryButton/CategoryLink";
import SabotenMenuData, { bannerData } from "./SabotenMenuData";
//import MenuPanel from "./panel/MenuPanel";
import MenuModal from "./modal/MenuModal";
import ModalProvider from "./modal/modal-provider";
import Fab from "./fab/Fab";
import SabotenMenuFlexColumn from "./SabotenMenuFlexColumn";

function HibarinMenuContent() {
  const params = useParams();
  const categoryData = [
    {
      text: "Authentic Katsu Set",
      type: "katsu",
      link: "/brand/saboten/menu/katsu",
    },
    {
      text: "Special Katsu Set",
      type: "katsu2",
      link: "/brand/saboten/menu/katsu2",
    },
    {
      text: "Rice Set",
      type: "rice",
      link: "/brand/saboten/menu/rice",
    },
    {
      text: "Noodles Set",
      type: "noodles",
      link: "/brand/saboten/menu/noodles",
    },
    {
      text: "Side Menu",
      type: "side",
      link: "/brand/saboten/menu/side",
    },
  ];
  const [category, setCategory] = useState(params.menu ? params.menu : "katsu");

  return (
    <ModalProvider>
      <SabotenBanner subject={params.subject} />
      <section className={styles.menuDetailSection}>
        <div className={styles.categoryButtonListWrapper}>
          {categoryData.map((d, i) => (
            <CategoryLink
              key={i}
              darkOutline={true}
              {...d}
              parentType={category}
              clickEvent={() => setCategory(d.type)}
            />
          ))}
        </div>
        {/* <div className="container">
                    <div className={styles.menuDetailPanelWrapper}>
                        {SabotenMenuData[category] &&
                            SabotenMenuData[category].map((d, i) => (
                                <MenuPanel key={i} {...d} />
                            ))}
                    </div>
                </div> */}
        <div className={`row ${styles.fixedMenuListFlexWrapper}`}>
          <div className={`col ${styles.menuFlexImageColumn}`}>
            <img
              src={bannerData[category] && bannerData[category]}
              alt="saboten"
              className="img-fill"
            />
          </div>
          <div className={`col ${styles.menuListFlexColumnWrapper}`}>
            {/* <div className={styles.menuListFlexColumn}>
                            <div className={styles.menuListRecipeImageWrapper}>
                                <img src={sabotenImage1} alt="katsu" />
                            </div>
                            <div>
                                <div className={styles.menuListEnTitle}>
                                    hibarin katsu(tenderloin/sirloin)
                                </div>
                                <div className={styles.menuListTitle}>
                                    ????????? ??????(??????/??????)
                                </div>
                                <div className={styles.menuListPrice}>
                                    17.0 / 16.0
                                </div>
                            </div>
                        </div> */}
            {SabotenMenuData[category] &&
              SabotenMenuData[category].map((d, i) => (
                <SabotenMenuFlexColumn key={i} delayKey={i} {...d} />
              ))}
          </div>
        </div>
      </section>
      <Footer />
      <MenuModal />
      <Fab subject="saboten" />
    </ModalProvider>
  );
}

export default HibarinMenuContent;
