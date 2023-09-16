import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

import styles from "./searchbar.module.scss";

const SearchBar = () => {
    const [searchString, setSearchString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchString != "") {
            Router.push({
                pathname: "/search",
                query: { channel: searchString },
            });
        }
    };

    return (
        <div className={styles.container} onSubmit={handleSubmit}>
            <Form className={styles.searchForm}>
                <Form.Group className={styles.searchBar} controlId="search">
                    <Form.Control
                        type="text"
                        placeholder="Search Youtubers"
                        onChange={(e) => setSearchString(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant="light"
                    type="submit"
                    className={styles.searchBtn}
                >
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default SearchBar;
