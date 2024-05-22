import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TinyBlogCard from "@/components/specific/Blog/TinyBlogCard";
import TinyNewsletter from "@/components/specific/Newsletter/TinyNewsletter";

interface Blog {
    id: string;
    image: string;
    createdDate: string;
    author: string;
    title: string;
    summary: string;
}

const Sidebar = ({ blogs, ...props }: {
    blogs: Blog[]
}) => {
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
                        <FontAwesomeIcon icon={faSearch} />
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
                {blogs.map(blog =>
                    <TinyBlogCard blog={blog} />
                )}
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

            <TinyNewsletter />
        </div>
    );
};

export default Sidebar;
