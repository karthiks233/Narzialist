import React from "react";

import styles from "./searchpage.module.scss";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import SearchResults from "./SearchResults";

const SearchPage = ({ props }) => {
/*     console.log(props.channelKeys); */
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.wrapper}>
                <p className={styles.title}>Results for &apos;{props.searchString}&apos;:</p>
                <SearchResults props={props}/>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default SearchPage;
