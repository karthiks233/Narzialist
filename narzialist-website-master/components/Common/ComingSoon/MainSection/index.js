import React from "react";
import Image from "next/image";

import styles from "./mainsection.module.scss";
import logoPic from "../../../../public/logo.png";

const MainSection = () => (
    <div className={styles.container}>
        <Image
            src={logoPic}
            alt="NarziaList Youtube Analytics logo"
            objectFit="contain"
            width={400}
        />
        <p className={styles.title}>Coming Soon!</p>
    </div>
);

export default MainSection;
