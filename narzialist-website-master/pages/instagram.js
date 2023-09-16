import Head from "next/head";
import styles from "../styles/Home.module.css";

import ComingSoon from "../components/Common/ComingSoon";

export default function Instagram() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NarziaList</title>
                <meta
                    name="description"
                    content="Instagram data analytics"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"
                />
            </Head>

            <ComingSoon />
        </div>
    );
}
