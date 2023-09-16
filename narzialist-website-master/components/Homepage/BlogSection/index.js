import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./blogsection.module.scss";
import blogPic1 from "../../../public/blog1.png";
import blogPic2 from "../../../public/blog2.png";
import blogPic3 from "../../../public/blog3.png";
import blogPic4 from "../../../public/logo.png";

const BlogSection = () => {
    const [blogData, setBlogData] = useState([
        {
            id: 1,
            imageSrc: blogPic1,
            title: "Made For Kids & COPPA – Initial Look At The YouTube Data",
            description: "It’s been about two weeks since YouTube rolled out the COPPA restrictions across the platform where creators need to pick either on the channel or video level whether their content is to be made available to kids or not.",
        },
        {
            id: 2,
            imageSrc: blogPic2,
            title: "Simplified Analytics right at your fingertips!",
            description: "NarziaList gives all users access to our public data which, using advanced technology, is able to provide you with global analytics for any content creator, live streamer, or brand on various social media platforms.",
        },
        {
            id: 3,
            imageSrc: blogPic4,
            title: "Blog Section Title 3",
            description: "Short description of blog will appear here like lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
        },
        {
            id: 4,
            imageSrc: blogPic3,
            title: "Blog Section Title 4",
            description: "Short description of blog will appear here like lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
        },
    ]);

    return (
        <div className={styles.container}>
            <div className={styles.blogWrapper}>
                {blogData.map((data) => (
                    <div key={data.id} className={styles.blog}>
                        <Image
                            src={data.imageSrc}
                            alt="blog desc image"
                            objectFit="contain"
                            width={200}
                            height={200}
                        />
                        <div className={styles.blogTextSection}>
                            <Link href="/blog" className={styles.title}>{data.title}</Link>
                            <p className={styles.description}>
                                {data.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BlogSection;