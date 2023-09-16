import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Link from "next/link";

import styles from "./backbtn.module.scss";
import leftArrow from "../../../../public/leftarrow.png";

const BackBtn = () => (
    <div className={styles.container}>
        <Link href="/" passHref>
            <Button variant="light" className={styles.backBtn}>
                <Image
                    src={leftArrow}
                    objectFit="contain"
                    width={20}
                    alt="back button"
                    className={styles.arrowIcon}
                />
                Go Back
            </Button>
        </Link>
    </div>
);
export default BackBtn;
