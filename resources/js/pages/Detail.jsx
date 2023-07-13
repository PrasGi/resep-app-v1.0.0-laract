//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import Navbar from "../partials/Navbar";

const Detail = ({ item, materials, steps }) => {
    const materialData = materials.map((value, index) => (
        // console.log(value.name);
        <p key={index} className="card-text">
            {value.name}
        </p>
    ));

    const stepData = steps.map((value, index) => (
        // console.log(value.name);
        <p key={index} className="card-text">
            {value.name}
        </p>
    ));

    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-12">
                    <div className="card" style={{ width: "100%" }}>
                        <img
                            src={item.image}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body mb-2">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className="card-body mb-2">
                            <h5 className="card-title">Materials</h5>
                            {materialData}
                        </div>
                        <div className="card-body mb-2">
                            <h5 className="card-title">Steps</h5>
                            {stepData}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
