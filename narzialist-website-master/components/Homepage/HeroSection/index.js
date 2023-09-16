import React from "react";

import styles from "./herosection.module.scss";
import Chart from "./Chart";

const HeroSection = ({ props }) => {
    return (
        <div className={styles.container}>
            <div className={styles.chartSection}>
                <Chart props={props}/>
            </div>
        </div>
    );
};

export default HeroSection;
