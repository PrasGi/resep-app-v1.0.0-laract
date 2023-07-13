//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import Search from "../components/dashboard/Search";
import Navbar from "../partials/Navbar";
import Cards from "../components/dashboard/Cards";

export default function Dashboard({ items }) {
    // console.log(items.data);
    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                <div className="col-6 mb-2">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-9">
                    <Cards cardsItem={items.data} />
                </div>
            </div>
        </>
    );
}
