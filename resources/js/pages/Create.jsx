//import React
import React, { useState } from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import Navbar from "../partials/Navbar";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ errors, session }) => {
    // console.log(session);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Material, setMaterial] = useState([""]);
    const [Step, setStep] = useState([""]);
    const [Image, setImage] = useState(null); // State untuk Image

    const addMaterial = () => {
        setMaterial([...Material, ""]);
    };

    const addStep = () => {
        setStep([...Step, ""]);
    };

    const handleMaterialChange = (e, index) => {
        const updatedMaterial = [...Material];
        updatedMaterial[index] = e.target.value;
        setMaterial(updatedMaterial);
    };

    const handleStepChange = (e, index) => {
        const updatedStep = [...Step];
        updatedStep[index] = e.target.value;
        setStep(updatedStep);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const add = async (e) => {
        e.preventDefault();
        console.log("add");

        Inertia.post("/resep", {
            title: title,
            description: description,
            image: Image,
            step: Step,
            material: Material,
        });
    };

    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                <div className="col-md-8 shadow p-4 bg-light mt-4">
                    <div className="text-center">
                        <h4>Add new resep</h4>
                    </div>
                    {session.success && (
                        <div className="alert alert-success" role="alert">
                            {session.success}
                        </div>
                    )}
                    <form onSubmit={add}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="emailHelp"
                                name="judul"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Deskription
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="deskripsi"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="" id="Material-container">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                            >
                                Material
                            </label>
                            {Material.map((item, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control mb-1"
                                    name="material[]"
                                    value={item}
                                    onChange={(e) =>
                                        handleMaterialChange(e, index)
                                    }
                                />
                            ))}
                        </div>
                        <div className="mb-3">
                            <a
                                className="btn btn-info text-light"
                                href="#"
                                onClick={addMaterial}
                            >
                                + item material
                            </a>
                        </div>
                        <div className="" id="Step-container">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                            >
                                Steps
                            </label>
                            {Step.map((item, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="form-control mb-1"
                                    name="step[]"
                                    value={item}
                                    onChange={(e) => handleStepChange(e, index)}
                                />
                            ))}
                        </div>
                        <div className="mb-3">
                            <a
                                className="btn btn-info text-light"
                                href="#"
                                onClick={addStep}
                            >
                                + item step
                            </a>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                            >
                                Upload image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="Image"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="w-100">
                            <button
                                type="submit"
                                className="btn btn-dark w-100"
                            >
                                Upload Resep
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;
