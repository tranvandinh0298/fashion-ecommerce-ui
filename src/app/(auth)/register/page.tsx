import React from 'react'
import Breadcrumb from "components/common/Breadcrumb";

const Register = () => {
    let sequence = [
        {
            label: "Home",
            href: "/",
            active: false,
        }, {
            label: "Register",
            href: "#",
            active: true,
        }
    ];
    return (
        <main>
            <Breadcrumb breadcrumbs={sequence} />

            <section className="shop login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-12">
                            <div className="login-form">
                                <h2>Register</h2>
                                <form
                                    className="form"
                                    method="post"
                                    action="#"
                                >
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label
                                                >Your Name<span
                                                >*</span></label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder=""
                                                    required
                                                    value="#"
                                                />
                                                <span className="text-danger">Nhập tên</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label
                                                >Your Email<span
                                                >*</span></label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder=""
                                                    required
                                                    value="#"
                                                />
                                                <span className="text-danger">Vui lòng nhập email</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label
                                                >Your Password<span
                                                >*</span></label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder=""
                                                    required
                                                    value="#"
                                                />
                                                <span className="text-danger">Nhập mật khẩu</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label
                                                >Confirm Password<span
                                                >*</span></label>
                                                <input
                                                    type="password"
                                                    name="password_confirmation"
                                                    placeholder=""
                                                    required
                                                    value="#"
                                                />
                                                <span className="text-danger"
                                                >Nhập lại mật khẩu</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group login-btn">
                                                <button
                                                    className="btn"
                                                    type="submit"
                                                >
                                                    Register
                                                </button>
                                                <a
                                                    href="#"
                                                    className="btn btn-google"
                                                >Back to Login</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register