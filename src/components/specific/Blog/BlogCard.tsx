import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faChevronRight,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

interface Blog {
    id: string;
    image: string;
    createdDate: string;
    author: string;
    title: string;
    summary: string;
}

const BlogCard = ({ blog, ...props }: { blog: Blog }) => {
    return (
        <div className="shop-single-blog">
            <img src={blog.image} alt="#" />
            <div className="content">
                <p className="date">
                    <FontAwesomeIcon icon={faCalendar} />
                    {blog.createdDate}
                    <span className="float-right">
                        <FontAwesomeIcon icon={faUser} />
                        {blog.author}
                    </span>
                </p>
                <a href="#" className="title">
                    {blog.title}
                </a>
                <p>{blog.summary}</p>
                <a href="#" className="more-btn">
                    Continue Reading
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
