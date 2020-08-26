import React from "react";
import SupportDetailBannerImage from "../../static/images/support-detail-img-mar-Support.png";

function SupportDetailContent() {
    return (
        <>
            <div>hi</div>
            <div className="position-relative">
                <div></div>
                <div>
                    <img
                        src={SupportDetailBannerImage}
                        alt="Support Detail Banner"
                        className="img-fill"
                    />
                </div>
            </div>
        </>
    );
}

export default SupportDetailContent;
