import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Button from "react-bootstrap/Button";

import styles from "./herosection.module.scss";

const dataMap = [
    {
        id: 1,
        title: "Youtube Most Subscribed Channels",
        category: "subs",
        btnTitle: "Subscribers",
    },
    {
        id: 2,
        title: "Youtube Most Viewed Videos",
        category: "views",
        btnTitle: "Views",
    },
    {
        id: 3,
        title: "Youtube Most Liked Videos",
        category: "likes",
        btnTitle: "Likes",
    },
    {
        id: 4,
        title: "Youtube Most Disliked Videos",
        category: "dislikes",
        btnTitle: "Dislikes",
    },
    {
        id: 5,
        title: "Youtube Videos with Most Comments",
        category: "comments",
        btnTitle: "Comments",
    },
];

const Chart = ({ props }) => {
    const [id, setId] = useState(1);

    return (
        <>
            <h2>{dataMap[id - 1].title}</h2>
            <div className={styles.buttonSection}>
                {dataMap.map((data) => (
                    <Button
                        variant="dark"
                        key={data.id}
                        className={styles.button}
                        onClick={() => {
                            setId(data.id);
                        }}
                    >
                        {data.btnTitle}
                    </Button>
                ))}
            </div>
            {id === 1 ? (
                <Bar
                    data={props.subsInputData}
                    options={props.subsChartOptions}
                />
            ) : id === 2 ? (
                <Bar
                    data={props.viewsInputData}
                    options={props.viewsChartOptions}
                />
            ) : id === 3 ? (
                <Bar
                    data={props.likesInputData}
                    options={props.likesChartOptions}
                />
            ) : id === 4 ? (
                <Bar
                    data={props.dislikesInputData}
                    options={props.dislikesChartOptions}
                />
            ) : (
                <Bar
                    data={props.commentsInputData}
                    options={props.commentsChartOptions}
                />
            )}
        </>
    );
};
export default Chart;