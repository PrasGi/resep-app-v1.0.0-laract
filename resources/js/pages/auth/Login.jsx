import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";
import FormLogin from "../../components/login/FormLogin";

const Login = ({ errors }) => {
    return (
        <div
            className="row d-flex align-items-center"
            style={{ height: "100vh" }}
        >
            <div className="col-md-6 offset-md-3 shadow-lg p-3 bg-light rounded-2">
                <div className="text-center mb-2">
                    <h2>Login user</h2>
                </div>
                {errors.error && (
                    <div className="alert alert-danger" role="alert">
                        {errors.error}
                    </div>
                )}
                <FormLogin errors={errors} />
            </div>
        </div>
    );
};

export default Login;
