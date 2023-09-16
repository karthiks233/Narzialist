import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import logoPic from '../../../public/whiteLogo.png';

import styles from "./footer.module.scss";

const Footer = () => {
    const [links, setLinks] = useState([
        {
            id: 1,
            link: "https://www.facebook.com/Narzialist-106040495166744",
            logo: FaFacebook,
        },
        {
            id: 2,
            link: "https://www.instagram.com/narzialist/",
            logo: FaInstagram,
        },
        {
            id: 3,
            link: "https://www.youtube.com/channel/UC-sF1YFPqcTqXiiDVHi1lTQ/",
            logo: FaYoutube,
        },
        {
            id: 4,
            link: "https://twitter.com/narzialist",
            logo: FaTwitter,
        },
    ]);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.footerLine}></div>
                <div className={styles.footer}>
                    {links.map((data) => (
                        <div key={data.id} className={styles.imgContainer}>
                            <a
                                href={data.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <data.logo size="1.75em" />
                            </a>
                        </div>
                    ))}
                </div>
                <div className={styles.footerLine}></div>
            </div>
            <div className={styles.finalSection}>
                <Image
                src={logoPic}
                alt="logo"
                objectFit="contain"
                />
                <p className={styles.copyText}>Copyright &copy; 2021 NarziaList</p>
            </div>
        </div>
    );
};
export default Footer;
