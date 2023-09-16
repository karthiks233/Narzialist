import Head from "next/head";
import styles from "../styles/Home.module.css";

import Homepage from "../components/Homepage";

const backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
];
const borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
];
const borderWidth = 1;

export async function getStaticProps() {
    const subs = await fetch(
        "http://narzialist.herokuapp.com/api/get_wiki/subs"
    );
    const subsData = await subs.json();
    const subsInputData = {
        labels: subsData.Channel.slice(0, 20),
        datasets: [
            {
                data: subsData["Subscribers(millions)"].slice(0, 20),
                backgroundColor,
                borderColor,
                borderWidth,
            },
        ],
    };
    const subsChartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                suggestedMin: 50,
                suggestedMax: 200,
                title: {
                    display: true,
                    text: "No. of subs in millions",
                },
            },
        },
    };

    const views = await fetch(
        "http://narzialist.herokuapp.com/api/get_wiki/views"
    );
    const viewsData = await views.json();
    const viewsInputData = {
        labels: viewsData["Video name"].slice(0, 20),
        datasets: [
            {
                data: viewsData["Views (billions)"].slice(0, 20),
                backgroundColor,
                borderColor,
                borderWidth,
            },
        ],
    };
    const viewsChartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 10,
                title: {
                    display: true,
                    text: "No. of views in billions",
                },
            },
        },
    };

    const likes = await fetch(
        "http://narzialist.herokuapp.com/api/get_wiki/likes"
    );
    const likesData = await likes.json();
    const likesInputData = {
        labels: likesData["Video name"].slice(0, 20),
        datasets: [
            {
                data: likesData["Likes (millions)"].slice(0, 20),
                backgroundColor,
                borderColor,
                borderWidth,
            },
        ],
    };
    const likesChartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 50,
                title: {
                    display: true,
                    text: "No. of likes in millions",
                },
            },
        },
    };

    const dislikes = await fetch(
        "http://narzialist.herokuapp.com/api/get_wiki/dislikes"
    );
    const dislikesData = await dislikes.json();
    const dislikesInputData = {
        labels: dislikesData["Video name"].slice(0, 20),
        datasets: [
            {
                data: dislikesData["Dislikes (millions)"].slice(0, 20),
                backgroundColor,
                borderColor,
                borderWidth,
            },
        ],
    };
    const dislikesChartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 25,
                title: {
                    display: true,
                    text: "No. of dislikes in millions",
                },
            },
        },
    };

    const comments = await fetch(
        "http://narzialist.herokuapp.com/api/get_wiki/comments"
    );
    const commentsData = await comments.json();
    const commentsInputData = {
        labels: commentsData["Video name"].slice(0, 20),
        datasets: [
            {
                data: commentsData["Comments"].slice(0, 20),
                backgroundColor,
                borderColor,
                borderWidth,
            },
        ],
    };
    const commentsChartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 20,
                title: {
                    display: true,
                    text: "No. of comments in millions",
                },
            },
        },
    };

    return {
        props: {
            subsInputData,
            subsChartOptions,
            viewsInputData,
            viewsChartOptions,
            likesInputData,
            likesChartOptions,
            dislikesInputData,
            dislikesChartOptions,
            commentsInputData,
            commentsChartOptions,
        },
        revalidate: 3600,
    }
}

export default function Home(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>NarziaList</title>
                <meta
                    name="description"
                    content="NarziaList Youtube Analytics"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"
                />
            </Head>

            <Homepage props={props} />
        </div>
    );
}
