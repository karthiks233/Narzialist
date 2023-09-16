import Head from "next/head";
import { withRouter } from "next/router";
import styles from "../styles/Home.module.css";

import SearchPage from "../components/SearchPage/index";

export async function getServerSideProps(context) {
    const res = await fetch(
        "http://narzialist.herokuapp.com/api/get_yt?q=" + context.query.channel
    );
    const channelsData = await res.json();

    return {
        props: {
            searchString: context.query.channel,
            channelsData
        },
    };
}

function Search(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>NarziaList</title>
                <meta
                    name="description"
                    content="Search for youtubers and channel data"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"
                />
            </Head>

            <SearchPage props={props} />
        </div>
    );
}
export default withRouter(Search);
