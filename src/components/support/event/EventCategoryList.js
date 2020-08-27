import React, { useState } from "react";
import CategoryButton from "../../categoryButton/CategoryButton";
import { eventCategoryListWrapper } from "./event.module.scss";

function EventCategoryList() {
    const data = [
        {
            text: "전체",
            type: "all",
        },
        {
            text: "사보텐",
            type: "saboten",
        },
        {
            text: "히바린",
            type: "hibarin",
        },
        {
            text: "타코벨",
            type: "tacobell",
        },
        {
            text: "반주",
            type: "banjoo",
        },
        {
            text: "센트럴키친",
            type: "centralkitchen",
        },
        {
            text: "캘리스코",
            type: "kalisco",
        },
    ];
    const [type, setType] = useState("all");

    return (
        <div className={eventCategoryListWrapper}>
            {data.map((d, i) => (
                <CategoryButton
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
