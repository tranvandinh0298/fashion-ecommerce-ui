import React from "react";

const Sidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="single-widget search">
                <form className="form" method="GET" action="#">
                    <input
                        type="text"
                        placeholder="Search Here..."
                        name="search"
                    />
                    <button className="button">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="single-widget category">
                <h3 className="title">Blog Categories</h3>
                <ul className="categor-list">
                    <form action="#" method="POST">
                        <li>
                            <a href="#">category 1</a>
                        </li>
                        <li>
                            <a href="#">category 2</a>
                        </li>
                        <li>
                            <a href="#">category 3</a>
                        </li>
                        <li>
                            <a href="#">category 4</a>
                        </li>
                    </form>
                </ul>
            </div>
            <div className="single-widget recent-post">
                <h3 className="title">Recent post</h3>
                <div className="single-post">
                    <div className="image">
                        <img
                            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
                            alt="#"
                        />
                    </div>
                    <div className="content">
                        <h5>
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                        </h5>
                        <ul className="comment">
                            <li>
                                <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                ></i>
                                2024/05/11 11:23
                            </li>
                            <li>
                                <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                ></i>
                                Anonymous
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="single-widget side-tags">
                <h3 className="title">Tags</h3>
                <form action="#" method="POST">
                    <ul className="tag">
                        <li>
                            <a href="#">tag 1</a>
                        </li>
                        <li>
                            <a href="#">tag 2</a>
                        </li>
                        <li>
                            <a href="#">tag 3</a>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="single-widget newsletter">
                <h3 className="title">Newslatter</h3>
                <div className="letter-inner">
                    <h4>
                        Subscribe & get news <br />
                        latest updates.
                    </h4>
                    <form method="POST" action="#" className="form-inner">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
