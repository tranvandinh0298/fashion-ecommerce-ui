import React from 'react'
import Breadcrumb from "components/common/Breadcrumb";

const Login = () => {
    let sequence = [
        {
            label: "Home",
            href: "/",
            active: false,
        }, {
            label: "Login",
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
                                <h2>Login</h2>
                                <form
                                    className="form"
                                    method="post"
                                    action="#"
                                >
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label
                                                >Your Email<span
                                                >*</span></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Nhập email"
                                                    required
                                                    value=""
                                                />
                                                <span className="text-danger"
                                                >Vui lòng nhập email</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label
                                                >Your Password<span
                                                >*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder=""
                                                    required
                                                    value=""
                                                />
                                                <span className="text-danger">Mật khẩu phải dài hơn 10 ký tự</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group login-btn">
                                                <button
                                                    className="btn btn-facebook"
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                                <a
                                                    href="#"
                                                    className="btn">Register</a>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox-inline" htmlFor="2">
                                                    <input
                                                        name="news"
                                                        id="2"
                                                        type="checkbox"
                                                    />Remember me
                                                </label>
                                            </div>
                                            <a
                                                className="lost-pass"
                                                href="#"
                                            >
                                                Lost your password?
                                            </a>
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

export default Login