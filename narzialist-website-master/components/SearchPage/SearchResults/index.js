import React from "react";
import Image from "next/image";

import styles from "./searchresults.module.scss";

const SearchResults = ({ props }) => {
    return (
        <div className={styles.container}>
            {props.channelsData.map((channel) => (
                <div
                    key={channel.thumbnailURL}
                    className={styles.resultContainer}
                >
                    <Image
                        src={channel.thumbnailURL}
                        alt="thumbnail"
                        objectFit="contain"
                        width={135}
                        height={135}
                    />
                    <div className={styles.textSection}>
                        {channel.customUrl ? (
                            <a
                                href={
                                    "http://www.youtube.com/" +
                                    channel.customUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                className={styles.channelName}
                            >
                                {channel.title}
                                <p className={styles.link}>&#128279;</p>
                            </a>
                        ) : (
                            <p className={styles.channelName}>
                                {channel.title}
                            </p>
                        )}
                        <p className={styles.description}>
                            {channel.description}
                        </p>
                        <div className={styles.infoSection}>
                            <div className={styles.dataContainer}>
                                Views
                                <b>{channel.viewCount}</b>
                            </div>
                            <div className={styles.dataContainer}>
                                Subscribers
                                <b>{channel.subscriberCount}</b>
                            </div>
                            <div className={styles.dataContainer}>
                                Uploads
                                <b>{channel.videoCount}</b>
                            </div>
                            <div className={styles.dataContainer}>
                                Created On
                                <b>{channel.publishedAt.substring(0, 10)}</b>
                            </div>
                            <div className={styles.dataContainer}>
                                Country
                                <b>{channel.country}</b>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
