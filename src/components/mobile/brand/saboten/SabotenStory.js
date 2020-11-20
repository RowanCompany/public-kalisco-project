import React from "react";
import styles from "./mobile_saboten.module.scss";
import storyMainImage from "../../../../static/images/mobile/img-p-saboten-story@2x.png";
import sabotenBrandIcon from "../../../../static/svg/mobile/icon-p-saboten-story-brand.svg";
import imageCheeseKatsu from "../../../../static/images/img-saboten-story-katsu-2.png";
import image1 from "../../../../static/images/img-p-saboten-story-yuja@2x.png";
import image2 from "../../../../static/images/img-p-saboten-story-breadcrumbs@2x.png";
import image3 from "../../../../static/images/img-p-saboten-story-pork@2x.png";
import image4 from "../../../../static/images/img-p-saboten-story-sauce@2x.png";
import image5 from "../../../../static/images/img-p-saboten-story-handmade@2x.png";
import gif3 from "../../../../static/images/gif-p-saboten-story3.gif";
import gif4 from "../../../../static/images/gif-p-saboten-story4.gif";
import lastImage from "../../../../static/images/img-p-saboten-story-last.png";

export default function SabotenStory() {
  return (
    <>
      <section className={styles.storySection}>
        <div className={styles.storyBrandTitle}>Saboten</div>
        <div className={styles.storyBrandSince}>Since 1996</div>
        <div className={styles.storyMainImageWrapper}>
          <img
            src={storyMainImage}
            alt="saboten main story"
            className="img-fill"
          />
          <div
            className={`${styles.storyDivider} ${styles.storyMainDivider}`}
          />
        </div>
        <div className={styles.storyMainDescription}>
          1966년 처음 문을 연 정통 돈카츠 전문점 사보텐은
          <br />
          오랜 시간 동안 오로지 맛있고 건강한 돈카츠를
          <br />
          고객에게 정성껏 대접하는 일에만 매달렸습니다.
        </div>
        <div className="text-center">
          <img src={sabotenBrandIcon} alt="brand icon" />
        </div>
        <div className={styles.storyBrandDescription}>
          사보텐은 스페인어로 <b>‘선인장’</b>을 의미 합니다.
          <br />
          <br />
          신주쿠 돈카츠 전문점 사보텐은
          <br />
          선인장과 같은 영원한 생명력을 염원으로
          <br />
          탄생한 브랜드 입니다.
        </div>
        <div className={styles.storyDivider} style={{ margin: "27px auto" }} />
        <div className={styles.historyTimelineWrapper}>
          <div className={styles.historyTimelineTitle}>
            사보텐이 이루어낸 <b style={{ color: "#E8390E" }}>최초</b>는
          </div>
          <div className={styles.timeline}>
            <ul style={{ padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "72px" }}>
                <div className={styles.content}>
                  <div
                    className={`${styles.timelineContentWrapper} ${styles.contentLeft}`}
                  >
                    <div>
                      <div className={styles.timelineContentNumber}>2001</div>
                      <div className={styles.timelineContentDescriptionWrapper}>
                        <div style={{ marginBottom: "8px" }}>
                          <b style={{ color: "#E8390E" }}>세계 최초</b>
                          <br /> 치즈카츠 출시
                        </div>
                        <div style={{ marginBottom: "8px" }}>
                          <b style={{ color: "#E8390E" }}>세계 최초</b>
                          <br /> 돈카츠 전용 기름 개발
                        </div>
                        <div>
                          <b style={{ color: "#E8390E" }}>국내 최초</b>
                          <br /> 생 빵가루 사용
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.point} />
                <div className={styles.date} />
              </li>
              <li style={{ paddingBottom: "16px" }}>
                <div className={styles.date} />
                <div className={styles.point} />
                <div className={styles.content}>
                  <div
                    className={`${styles.timelineContentWrapper} ${styles.contentRight}`}
                  >
                    <div>
                      <div className={styles.timelineContentNumber}>2012</div>
                      <div className={styles.timelineContentDescriptionWrapper}>
                        <div>
                          <b style={{ color: "#E8390E" }}>국내 최초</b> 카사네
                          카츠 출시
                        </div>
                        <div>
                          <b style={{ color: "#E8390E" }}>국내 최초</b> 흑카레
                          출시
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ paddingBottom: "48px" }}>
                <div className={styles.content}>
                  <div
                    className={`${styles.timelineContentWrapper} ${styles.contentLeft}`}
                  >
                    <div>
                      <div className={styles.timelineContentNumber}>2013</div>
                      <div className={styles.timelineContentDescriptionWrapper}>
                        <div>
                          <b style={{ color: "#E8390E" }}>국내 최초</b> 흑
                          돈카츠 출시
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.point} />
                <div className={styles.date} />
              </li>
              <li>
                <div className={styles.date} />
                <div className={styles.point} />
                <div className={styles.content}>
                  <div
                    className={`${styles.timelineContentWrapper} ${styles.contentRight}`}
                  >
                    <div>
                      <div className={styles.timelineContentNumber}>2016</div>
                      <div className={styles.timelineContentDescriptionWrapper}>
                        <div style={{ marginBottom: "8px" }}>
                          <b style={{ color: "#E8390E" }}>세계 최초</b>
                          <br />
                          뼈째 튀겨낸
                          <br />
                          스테이크 카츠 출시
                        </div>
                        <div style={{ marginBottom: "8px" }}>
                          <b style={{ color: "#E8390E" }}>국내 최초</b>
                          <br />
                          블랙 카츠 출시
                        </div>
                        <div>
                          <b style={{ color: "#E8390E" }}>세계 최초</b>
                          <br />
                          말차 비어 출시
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.storyCheeseKatsuImageWrapper}>
            <img
              src={imageCheeseKatsu}
              alt="cheese katsu"
              className="img-fill"
            />
          </div>
          <div className={styles.storyRecipeMainDescription}>
            50년 넘게 지켜온 사보텐 고유의
            <br />
            정통 돈카츠 레시피를 끊임없는 연구를
            <br />
            통해 우리의 입맛에 맞게 개선하였습니다.
          </div>
        </div>
        <div className={styles.storyDivider} style={{ margin: "27px auto" }} />
        <div>
          <div className={styles.storyRecipeBoxWrapper}>
            <div className={styles.storyRecipeBoxImageWrapper}>
              <img src={image1} alt="yuja" className="img-fill" />
            </div>
            <div className={styles.storyRecipeTitle}>
              전남고흥 유자샐러드 소스
            </div>
            <div className={styles.storyRecipeDescription}>
              전라남도 고흥의 엄선된 유자 본연의 향과 맛을
              <br />
              느낄 수 있는 샐러드 드레싱
            </div>
          </div>
          <div className={styles.storyRecipeBoxWrapper}>
            <div className={styles.storyRecipeBoxImageWrapper}>
              <img src={image2} alt="bread powder" className="img-fill" />
            </div>
            <div className={styles.storyRecipeTitle}>
              50년 전통비법 생 빵가루
            </div>
            <div className={styles.storyRecipeDescription}>
              50년 전통비법 레시피로 만든,
              <br />
              부드럽고 바삭한 사보텐만의 차별화된 생빵가루
            </div>
          </div>
          <div className={styles.storyRecipeBoxWrapper}>
            <div className={styles.storyRecipeBoxImageWrapper}>
              <img src={gif3} alt="bread powder" className="img-fill" />
            </div>
            <div className={styles.storyRecipeDescription}>
              신선하고 바삭한 튀김의 식감을 위해 자체 제작하는
              <br />
              1.1cm 길이의 생빵가루는 오직 사보텐만의 비법입니다.
            </div>
          </div>
          <div className={styles.storyRecipeBoxWrapper}>
            <div className={styles.storyRecipeBoxImageWrapper}>
              <img src={gif4} alt="oil" className="img-fill" />
            </div>
            <div className={styles.storyRecipeTitle}>
              트랜스지방 0% 돈카츠 전용 기름 개발
            </div>
            <div className={styles.storyRecipeDescription}>
              트랜스 지방 0%!
              <br />
              매일 신선한 기름을 사용하여 고소하며
              <br />
              느끼하지 않은 국내최초 돈카츠 전용 튀김유
            </div>
          </div>
          <div className={styles.storyRecipeBoxWrapper}>
            <div className={styles.storyRecipeBoxImageWrapper}>
              <img src={image3} alt="pork" className="img-fill" />
            </div>
            <div className={styles.storyRecipeTitle}>
              192시간 숙성 프리미엄 돈육
            </div>
            <div className={styles.storyRecipeDescription}>
              엄선된 1등급 돈육만을 192시간 숙성 기술로 완성한
              <br />
              부드러운 숙성 돈육
            </div>
          </div>
          <div className={styles.storyRecipeBoxWrapper}>
            <div className={styles.storyRecipeBoxImageWrapper}>
              <img src={image4} alt="fruit" className="img-fill" />
            </div>
            <div className={styles.storyRecipeTitle}>5과1주 돈카츠 소스</div>
            <div className={styles.storyRecipeDescription}>
              5가지 과일 고유의 단맛과 레드와인의 풍미로
              <br />
              돈카츠의 맛을 풍부하게 만들어 주는
              <br />
              특제 돈카츠 소스
            </div>
          </div>
          <div className={styles.storyRecipeBoxWrapper}>
            <div className={styles.storyRecipeBoxImageWrapper}>
              <img src={image5} alt="handmade" className="img-fill" />
            </div>
            <div className={styles.storyRecipeTitle}>정통의 수제 방식</div>
            <div className={styles.storyRecipeDescription}>
              정통 돈카츠 본연의 맛을 느낄 수 있는
              <br />
              장인의 돈육 수제 두드림 방식 테테타타쿠
            </div>
          </div>
        </div>
      </section>
      <div
        className={styles.storyRecipeBoxWrapper}
        style={{ paddingBottom: "62px" }}
      >
        <div className={styles.storyRecipeBoxImageWrapper}>
          <img src={lastImage} alt="handmade" className="img-fill" />
        </div>
        <div className={`${styles.storyRecipeDescription} text-center`}>
          음식에 대한 신뢰는 시간의 축적으로 만들어집니다.
          <br />
          <br />
          오랜 시간 많은 사람들의 한끼 식사를 책임져온
          <br />
          대한민국 대표 돈카츠 전문점 사보텐은
          <br />
          장인정신을 바탕으로 최고의 카츠 요리에 대한
          <br />
          변함 없는 기준을 제시합니다.
        </div>
      </div>
    </>
  );
}
