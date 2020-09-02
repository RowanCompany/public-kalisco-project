import React from "react";
import storyImage from "../../static/images/img-p-hibarin-story.png";
import storyText from "../../static/images/text-hibarin-story.png";
import styles from "./hibarin.module.scss";

function HibarinStory() {
    return (
        <div className="row">
            <div className="col">
                <img src={storyImage} alt="story" className="img-fill" />
            </div>
            <div className={`col ${styles.storyFlexWrapper}`}>
                <div className={styles.storySpaceWrapper}>
                    <div className={styles.storyTitle}>
                        전통 카츠 레스토랑을 현대적으로 재해석한
                    </div>
                    <div>
                        <img src={storyText} alt="story" />
                    </div>
                    <div className={styles.storyVerticalHr} />
                    <div className={styles.storyDescription}>
                        즐겁고 편안한 분위기에서 즐기는 특별한 경험을
                        만나보세요.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HibarinStory;
