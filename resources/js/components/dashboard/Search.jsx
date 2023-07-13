//import React
import React, { useState } from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Search = () => {
    const [search, setSearch] = useState("");

    const searching = async (e) => {
        e.preventDefault();
        Inertia.get("/", {
            search: search,
        });
    };

    return (
        <form className="d-flex" role="search" onSubmit={searching}>
            <input
                className="form-control me-2 shadow"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <button className="btn btn-outline-success shadow" type="submit">
                Search
            </button>
        </form>
    );
};

export default Search;
