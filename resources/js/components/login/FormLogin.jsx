import React, { useState } from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const FormLogin = ({ errors }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        Inertia.post("/login", {
            email: email,
            password: password,
        });
    };

    return (
        <form onSubmit={login}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errors.password && (
                    <p className="text-danger">{errors.password}</p>
                )}
            </div>
            <button type="submit" className="btn btn-dark">
                Login
            </button>
        </form>
    );
};

export default FormLogin;
