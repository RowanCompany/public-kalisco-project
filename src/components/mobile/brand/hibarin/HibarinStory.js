import React from "react";
import styles from "./mobile_hibarin.module.scss";
import StoryImage from "../../../../static/images/mobile/img-p-hibarin-story@2x.png";

export default function HibarinStory() {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyImageWrapper}>
        <img src={StoryImage} alt="story" />
      </div>
      <div className={styles.storyDescriptionWrapper}>
        <div className={styles.storyDescriptionSubTitle}>
          전통 카츠 레스토랑을 현대적으로 재해석한
        </div>
        <div className={styles.storyDescriptionTitle}>
          KATSU & LOUNGE, Hibarin
        </div>
        <div className={styles.storyDescriptionDivider} />
        <div className={styles.storyDescription}>
          즐겁고 편안한 분위기에서 즐기는
          <br />
          특별한 경험을 만나보세요.
        </div>
      </div>
    </section>
  );
}
