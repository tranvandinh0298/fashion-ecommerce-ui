import Breadcrumbs from "components/common/Breadcrumb";
import React from "react";
import BlogCard from "components/specific/Blog/BlogCard";
import Sidebar from "components/layout/Sidebar";

const Blog = () => {
    let sequence = [
        {
            label: "Home",
            href: "/",
            active: false,
        },
        {
            label: "Blog",
            href: "#",
            active: true,
        },
    ];

    let blogs = [
        {
            id: "1",
            image: "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
            createdDate: "2024/05/24 11:23",
            author: "Anonymous",
            title: "Lorem ipsum dolor sit amet.",
            summary:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque.",
        },
        {
            id: "2",
            image: "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
            createdDate: "2024/05/24 11:23",
            author: "Anonymous",
            title: "Lorem ipsum dolor sit amet.",
            summary:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque.",
        },
        {
            id: "3",
            image: "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
            createdDate: "2024/05/24 11:23",
            author: "Anonymous",
            title: "Lorem ipsum dolor sit amet.",
            summary:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque.",
        },
        {
            id: "4",
            image: "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
            createdDate: "2024/05/24 11:23",
            author: "Anonymous",
            title: "Lorem ipsum dolor sit amet.",
            summary:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque.",
        },
    ];

    return (
        <main>
            <Breadcrumbs breadcrumbs={sequence} />

            <section className="blog-single shop-blog grid section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                {blogs.map((blog) => (
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <BlogCard blog={blog} />
                                    </div>
                                ))}
                                <div className="col-12"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
