import React, { useState, useEffect } from "react";
import CategoryLink from "../../categoryButton/CategoryLink";
import { eventCategoryListWrapper } from "./event.module.scss";

function EventCategoryList({ contentType }) {
    const data = [
        {
            text: "전체",
            type: "all",
            link: "/supports/events?type=all",
        },
        {
            text: "사보텐",
            type: "saboten",
            link: "/supports/events?type=saboten",
        },
        {
            text: "히바린",
            type: "hibarin",
            link: "/supports/events?type=hibarin",
        },
        {
            text: "타코벨",
            type: "tacobell",
            link: "/supports/events?type=tacobell",
        },
        {
            text: "반주",
            type: "banjoo",
            link: "/supports/events?type=banjoo",
        },
        {
            text: "센트럴키친",
            type: "centralkitchen",
            link: "/supports/events?type=centralkitchen",
        },
        {
            text: "캘리스코",
            type: "kalisco",
            link: "/supports/events?type=kalisco",
        },
    ];
    const [type, setType] = useState("all");
    useEffect(() => setType(contentType), [contentType]);

    return (
        <div className={eventCategoryListWrapper}>
            {data.map((d, i) => (
                <CategoryLink
                    key={i}
                    {...d}
                    parentType={type}
                    clickEvent={() => setType(d.type)}
                />
            ))}
        </div>
    );
}

export default EventCategoryList;
