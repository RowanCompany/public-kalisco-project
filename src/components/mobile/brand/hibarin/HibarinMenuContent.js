import React, { useState } from "react";
import { useParams, useRouteMatch, Redirect } from "react-router-dom";
import HibarinMenuNavigator from "./HibarinMenuNavigator";
import HibarinBanner from "../banner/BrandBanner";
import BannerImage from "../../../../static/images/mobile/img-hibarin-top@2x.png";
import BannerLogoIcon from "../../../../static/svg/mobile/hibarin-logo-header-w.svg";
import HibarinMenuTable from "./HibarinMenuTable";
import styles from "./mobile_hibarin.module.scss";
import Fab from "../../../brand/fab/Fab";
import { newBannerData } from "../../../brand/HibarinMenuData";

function HiabrinMenuContentCaseRenderer({ menu }) {
  switch (menu) {
    case "katsu":
      return (
        <>
          <HibarinMenuTable menu={menu} />
          <div className={styles.sideMenuSection}>
            <div className={styles.sideMenuFlexWrapper}>
              <div>
                <div className={styles.sideMenuEnTitle}>CURRY SAUCE</div>
                <div className={styles.sideMenuTitle}>카레 추가</div>
              </div>
              <div className={styles.sideMenuPrice}>2.5</div>
            </div>
            <div className={styles.sideMenuFlexWrapper}>
              <div>
                <div className={styles.sideMenuEnTitle}>RICE</div>
                <div className={styles.sideMenuTitle}>밥 추가</div>
              </div>
              <div className={styles.sideMenuPrice}>1.2</div>
            </div>
            <div className={styles.sideMenuFlexWrapper}>
              <div>
                <div className={styles.sideMenuEnTitle}>SIDE UDON/SOBA</div>
                <div className={styles.sideMenuTitle}>곁들임 우동/소바</div>
              </div>
              <div className={styles.sideMenuPrice}>3.8</div>
            </div>
            <div className={styles.sideMenuFlexWrapper}>
              <div>
                <div className={styles.sideMenuEnTitle}>SIDE DISH</div>
                <div className={styles.sideMenuTitle}>곁들임 반찬</div>
              </div>
              <div className={styles.sideMenuPrice}>2.0</div>
            </div>
          </div>
        </>
      );
    case "friends":
      return <HibarinMenuTable menu={menu} />;
    case "drink":
      return (
        <>
          <div style={{ height: "270px", marginBottom: "60px" }}>
            <img src={newBannerData[menu]} alt="drink" className="img-fill" />
          </div>
          <div className={styles.drinkMenuSection}>
            <div className={styles.drinkMenuFlexWrapper}>
              <div>
                <div className={styles.drinkMenuEnTitle}>MATCHA LEMONADE</div>
                <div className={styles.drinkMenuTitle}>말차 레몬에이드</div>
              </div>
              <div className={styles.drinkMenuPrice}>8.5</div>
            </div>
            <div className={styles.drinkMenuFlexWrapper}>
              <div>
                <div className={styles.drinkMenuEnTitle}>LEMON MOJITO</div>
                <div className={styles.drinkMenuTitle}>
                  레몬 모히또 (NON-ALCOHOL)
                </div>
              </div>
              <div className={styles.drinkMenuPrice}>8.5</div>
            </div>
            <div className={styles.drinkMenuFlexWrapper}>
              <div>
                <div className={styles.drinkMenuEnTitle}>
                  DRINKS (COKE/SPRITE)
                </div>
                <div className={styles.drinkMenuTitle}>
                  탄산음료 (콜라/스프라이트)
                </div>
              </div>
              <div className={styles.drinkMenuPrice}>3.5</div>
            </div>
            <div className={styles.drinkMenuFlexWrapper}>
              <div>
                <div className={styles.drinkMenuEnTitle}>KIDS' DRINK</div>
                <div className={styles.drinkMenuTitle}>
                  뽀로로 음료 (사과/딸기/밀크)
                </div>
              </div>
              <div className={styles.drinkMenuPrice}>2.5</div>
            </div>
            <div className={styles.drinkMenuFlexWrapper}>
              <div>
                <div className={styles.drinkMenuEnTitle}>DRAFT BEER</div>
                <div className={styles.drinkMenuTitle}>생맥주 (425ml) 테라</div>
              </div>
              <div className={styles.drinkMenuPrice}>5.0</div>
            </div>
            <div className={styles.drinkMenuFlexWrapper}>
              <div>
                <div className={styles.drinkMenuEnTitle}>BOTTLED BEER</div>
                <div className={styles.drinkMenuTitle}>
                  병맥주 (330ml) 클라우드
                </div>
              </div>
              <div className={styles.drinkMenuPrice}>5.5</div>
            </div>
          </div>
        </>
      );
    default:
      return <Redirect to="/brand/hibarin/menu/katsu" />;
  }
}

export default function HibarinMenuContent() {
  const params = useParams();
  const [category] = useState(params.menu ? params.menu : "katsu");
  const { url } = useRouteMatch();

  return (
    <>
      <HibarinBanner
        subject={params.subject}
        url={url}
        image={BannerImage}
        titleLogo={BannerLogoIcon}
      />
      <HibarinMenuNavigator category={category} />
      <HiabrinMenuContentCaseRenderer menu={category} />
      <Fab subject="hibarin" />
    </>
  );
}
