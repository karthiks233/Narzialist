import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";

import logoPic from "../../../public/whiteLogo.png";
import styles from "./header.module.scss";
import SearchBar from "../SearchBar";

const Header = () => (
    <div className={styles.container}>
        <div className={styles.logoSection}>
            {/*eslint-disable-next-line @next/next/no-html-link-for-pages*/}
            <a href="/">
                <Image
                    src={logoPic}
                    alt="NarziaList Youtube Analytics logo"
                    objectFit="contain"
                    width={350}
                />
            </a>
        </div>
        <div className={styles.navSection}>
            <SearchBar />
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Other Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/twitter">
                        Twitter Analytics
                    </Dropdown.Item>
                    <Dropdown.Item href="/instagram">
                        Instagram Analytics
                    </Dropdown.Item>
                    <Dropdown.Item href="/facebook">
                        Facebook Analytics
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
);

export default Header;
