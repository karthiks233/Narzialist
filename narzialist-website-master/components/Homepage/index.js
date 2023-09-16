import React from "react";

import styles from "./homepage.module.scss";
import HeroSection from "./HeroSection";
import BlogSection from "./BlogSection";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const Homepage = ({ props }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.wrapper}>
                <HeroSection props={props}/>
                <BlogSection />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Homepage;
