import React from 'react'
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

const TinyBlogCard = ({ blog, ...props }: {
    blog: Blog
}) => {
    return (
        <div className="single-post">
            <div className="image">
                <img
                    src={blog.image}
                    alt="#"
                />
            </div>
            <div className="content">
                <h5>
                    <a href="#">{blog.title}</a>
                </h5>
                <ul className="comment">
                    <li>
                        <FontAwesomeIcon icon={faCalendar} />
                        {blog.createdDate}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} />
                        {blog.author}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TinyBlogCard