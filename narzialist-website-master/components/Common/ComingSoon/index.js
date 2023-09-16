import React from "react";

import styles from "./comingsoon.module.scss";
import MainSection from "./MainSection";
import BackBtn from "./BackBtn";

const ComingSoon = () => (
    <div className={styles.container}>
        <BackBtn />
        <MainSection />
    </div>
);

export default ComingSoon;
