import Breadcrumbs from '@/components/common/Breadcrumb'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment, faQuoteLeft, faReply, faSearch, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '@/components/layout/Sidebar';
import Image from 'next/image';
import Comment from '@/components/specific/Comment';

interface Blog {
    id: string;
    image: string;
    createdDate: string;
    author: string;
    title: string;
    summary: string;
    quote: string;
}

interface Comment {
    id: string,
    image: string,
    username: string,
    createdDate: string,
    content: string,
    isParent: boolean,
    childComment: Comment | undefined
}

const BlogDetail = ({ params }: { params: { slug: string } }) => {
    let sequence = [
        {
            label: "Home",
            href: "/",
            active: false,
        }, {
            label: "About us",
            href: "#",
            active: true,
        }
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
            quote: "Lorem ipsum dolor sit amet",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, incidunt dolore? Beatae voluptatem magni unde repellat? Consequatur quam esse quo commodi doloremque laboriosam facere, placeat ullam magnam, magni impedit nihil?
            Consequuntur sed fuga molestias cupiditate nostrum sint possimus est ad. Dolore, porro! Fugit inventore obcaecati accusantium, nihil, velit deleniti, veniam aperiam eligendi beatae perferendis dignissimos dolorum dolore suscipit labore mollitia.
            Tenetur omnis incidunt repudiandae pariatur doloribus necessitatibus, nemo cumque perspiciatis suscipit expedita, quos in! Iste ab nemo error rerum cumque consectetur. Fugit optio repudiandae saepe dolor fugiat quas culpa rem.
            Esse blanditiis dicta excepturi quisquam ut illum ex deserunt cupiditate laborum natus officiis est quo dolorum dignissimos, iusto sunt earum, reprehenderit sed eligendi error enim cumque impedit. Impedit, tenetur officiis.
            Fuga laboriosam magnam quo iste corporis maxime, voluptas sapiente a sed praesentium nesciunt harum deserunt! Saepe eligendi illum impedit consequatur ut, sint fugit dolorem quis ipsam officia quia exercitationem illo.
            Ipsam corporis possimus nihil tempore tenetur, nam, accusantium maiores, voluptatem eaque animi laudantium quia. Sequi, perferendis similique quos eveniet ratione minus doloribus impedit, at quia nobis expedita vitae magnam excepturi!
            Ea laborum velit explicabo fugit ratione repellat magnam vero quae porro, alias sit? Doloribus quas ipsa quaerat, alias harum odio blanditiis fuga, ut earum excepturi esse ea distinctio delectus iure.
            Culpa inventore nobis eveniet quidem nemo dicta accusantium illum libero recusandae similique omnis quae debitis harum ut dolorem laudantium optio quasi dolor et, non distinctio, magnam ea eligendi! Dolorum, vitae?
            Sint quam reiciendis voluptatem nostrum voluptatibus dolorum omnis deleniti magnam at dolores, esse magni voluptate accusantium provident dicta odit. Velit est culpa commodi eaque dolor reprehenderit, maxime neque ipsa corrupti.
            Quos minus, nulla dolores deleniti et necessitatibus aut doloribus quas soluta dolorem eligendi quasi ipsum, vel sed adipisci maiores quis suscipit in quidem iure mollitia ducimus! Sint ipsam fugit amet.
            Dolores, odit cupiditate itaque dolorem optio necessitatibus, perspiciatis, et repudiandae quos nihil fugit voluptatum ipsa vel incidunt minus nesciunt id deleniti consequuntur. Dignissimos, consequatur consectetur labore delectus beatae magnam? Repellendus.
            Asperiores vel veritatis assumenda dolor incidunt, perferendis dignissimos illo quia, qui voluptate commodi, molestias a dolorum suscipit aliquam fuga magnam repellat! Laboriosam distinctio excepturi nobis adipisci aspernatur accusamus animi libero.
            Alias facere cum non impedit laboriosam reprehenderit a nostrum expedita culpa saepe assumenda officia necessitatibus obcaecati, natus fugit voluptatem quae numquam voluptate, eaque sed inventore perferendis fuga quia quam. Officiis.
            Fuga perferendis voluptatibus sapiente sunt numquam? Quibusdam cum, beatae illo eius fugiat, et inventore provident eum rerum blanditiis temporibus totam perspiciatis iure rem magnam! Mollitia dolor inventore iure culpa quos?
            Laudantium id labore aperiam iure odio fuga mollitia nostrum beatae ipsum illo ab dolorem corrupti aspernatur explicabo sunt optio, dolore commodi molestiae, voluptate doloribus. Nisi soluta mollitia voluptatibus vel. Ipsam.
            Distinctio neque consectetur minima illo minus dolore aperiam vero quod earum officia eius, quam reiciendis rem. Porro, voluptates quibusdam! Fugiat fuga in, exercitationem sed nisi esse perspiciatis asperiores sequi nihil?
            Voluptatem omnis distinctio expedita deleniti rem provident quidem natus perferendis doloribus ducimus magnam repellat ab sapiente ratione suscipit porro exercitationem mollitia ipsa veritatis quibusdam dicta, reiciendis vel minus! Voluptates, deserunt!
            Laboriosam accusantium repellat ad soluta. Dolorum praesentium cumque officia laudantium unde consequatur doloremque explicabo saepe. Delectus praesentium odit nisi nulla vero, eligendi aperiam. Sit voluptate repudiandae debitis pariatur fugit sed.
            Voluptatem officia tempore quod quae sit, vel iure dolores dolorem doloremque velit numquam mollitia dolor, eveniet quidem eum qui iste sapiente at recusandae quisquam voluptate eos blanditiis? Quia, labore! Nostrum.
            Voluptatem iste culpa, nihil aliquid officiis maiores deleniti voluptas, dolores quod vero cumque laboriosam veniam? Et voluptatum optio, saepe nisi, non illo esse beatae officia quod aut molestiae rem laboriosam?`
        },
        {
            id: "2",
            image: "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
            createdDate: "2024/05/24 11:23",
            author: "Anonymous",
            title: "Lorem ipsum dolor sit amet.",
            summary:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque.",
            quote: "Lorem ipsum dolor sit amet",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque."
        },
        {
            id: "3",
            image: "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
            createdDate: "2024/05/24 11:23",
            author: "Anonymous",
            title: "Lorem ipsum dolor sit amet.",
            summary:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque.",
            quote: "Lorem ipsum dolor sit amet",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis provident consequatur. Deleniti facilis sed quis iste aperiam quisqua atque."
        }
    ];

    let blog = blogs[0];

    let comments = [
        {
            id: 1,
            image: "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
            username: "user 1",
            createdDate: "2024/05/22 03:21",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minus. Eligendi recusandae molestiae nobis inventore quo fuga commodi voluptates minus dolorem, similique vero ullam ea, ab doloribus laudantium dolorum. Accusantium.",
            isParent: true,
            childComment: undefined
        },
        {
            id: 2,
            image: "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
            username: "user 2",
            createdDate: "2024/05/22 03:21",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minus. Eligendi recusandae molestiae nobis inventore quo fuga commodi voluptates minus dolorem, similique vero ullam ea, ab doloribus laudantium dolorum. Accusantium.",
            isParent: true,
            childComment: {
                id: 3,
                image: "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
                username: "user 3",
                createdDate: "2024/05/22 03:21",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minus. Eligendi recusandae molestiae nobis inventore quo fuga commodi voluptates minus dolorem, similique vero ullam ea, ab doloribus laudantium dolorum. Accusantium.",
                isParent: false,
                childComment: undefined
            }
        },

    ]

    return (
        <main>
            <Breadcrumbs breadcrumbs={sequence} />

            <section className="blog-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="blog-single-main">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image">
                                            <Image src={blog.image} width={400} height={400} alt='#' />
                                        </div>
                                        <div className="blog-detail">
                                            <h2 className="blog-title">
                                                {blog.title}
                                            </h2>
                                            <div className="blog-meta">
                                                <span className="author">
                                                    <a href="javascript:void(0);">
                                                        <FontAwesomeIcon icon={faUser} />
                                                        By {blog.author}
                                                    </a>
                                                    <a href="javascript:void(0);">
                                                        <FontAwesomeIcon icon={faCalendar} />
                                                        {blog.createdDate}
                                                    </a>
                                                    <a href="javascript:void(0);">
                                                        <FontAwesomeIcon icon={faComment} />
                                                        Comment (10)
                                                    </a>
                                                </span>
                                            </div>
                                            <div
                                                className="sharethis-inline-reaction-buttons"
                                            ></div>
                                            <div className="content">
                                                <blockquote>
                                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                                    {blog.quote}
                                                </blockquote>
                                                <p>
                                                    {blog.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="share-social">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="content-tags">
                                                        <h4>Tags:</h4>
                                                        <ul className="tag-inner">
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                >tag1</a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                >tag2</a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="javascript:void(0);"
                                                                >tag3</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <div className="reply">
                                            <div
                                                className="reply-head comment-form"
                                                id="commentFormContainer"
                                            >
                                                <h2 className="reply-title">
                                                    Leave a Comment
                                                </h2>
                                                <form
                                                    className="form comment_form"
                                                    id="commentForm"
                                                    action="{{route('post-comment.store',$post->slug)}}"
                                                    method="POST"
                                                >
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div
                                                                className="form-group comment_form_body"
                                                            >
                                                                <label
                                                                >Your
                                                                    Message<span
                                                                    >*</span></label>
                                                                <textarea
                                                                    name="comment"
                                                                    id="comment"
                                                                    rows={10}
                                                                    placeholder="Comment here"
                                                                ></textarea>
                                                                <input
                                                                    type="hidden"
                                                                    name="post_id"
                                                                    value="#"
                                                                />
                                                                <input
                                                                    type="hidden"
                                                                    name="parent_id"
                                                                    id="parent_id"
                                                                    value=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div
                                                                className="form-group button"
                                                            >
                                                                <button
                                                                    type="submit"
                                                                    className="btn"
                                                                >
                                                                    <span
                                                                        className="comment_btn comment"
                                                                    >Post Comment</span><span
                                                                        className="comment_btn reply"
                                                                        style={{ display: "none" }}
                                                                    >Reply
                                                                        Comment
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p className="text-center p-5">
                                        You need to
                                        <a
                                            href="{{route('login.form')}}"
                                            style={{ color: "rgb(54, 54, 204)" }}
                                        >Login</a>
                                        OR
                                        <a
                                            style={{ color: "blue" }}
                                            href="{{route('register.form')}}"
                                        >Register</a>
                                        for comment.
                                    </p> */}

                                    <div className="col-12">
                                        <div className="comments">
                                            <h3 className="comment-title">
                                                Comments (10)
                                            </h3>
                                            {comments.map((item) =>
                                                <Comment data={item} />
                                            )}

                                            {/* <div className="display-comment">
                                                <div className="comment-list">
                                                    <div className="single-comment">
                                                        <img
                                                            src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                                                            alt="#"
                                                        />
                                                        <div className="content">
                                                            <h4>
                                                                User 1
                                                                <span
                                                                >At
                                                                    2023/05/11
                                                                    11:00:22
                                                                    On</span>
                                                            </h4>
                                                            <p>
                                                                Lorem ipsum
                                                                dolor sit, amet
                                                                consectetur
                                                                adipisicing
                                                                elit. Vitae,
                                                                molestias.
                                                            </p>
                                                            <div className="button">
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-reply reply"
                                                                    data-id="{{ $comment->id }}"
                                                                >
                                                                    <FontAwesomeIcon icon={faReply} />
                                                                    Reply</a>
                                                                <a
                                                                    href=""
                                                                    className="btn btn-reply cancel"
                                                                    style={{ display: 'none' }}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                    Cancel</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="display-comment">
                                                <div className="comment-list">
                                                    <div className="single-comment">
                                                        <img
                                                            src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                                                            alt="#"
                                                        />
                                                        <div className="content">
                                                            <h4>
                                                                User 1
                                                                <span
                                                                >At
                                                                    2023/05/11
                                                                    11:00:22
                                                                    On</span>
                                                            </h4>
                                                            <p>
                                                                Lorem ipsum
                                                                dolor sit, amet
                                                                consectetur
                                                                adipisicing
                                                                elit. Vitae,
                                                                molestias.
                                                            </p>
                                                            <div className="button">
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-reply reply"
                                                                    data-id="{{ $comment->id }}"
                                                                ><i
                                                                    className="fa fa-reply"
                                                                    aria-hidden="true"
                                                                ></i>Reply</a>
                                                                <a
                                                                    href=""
                                                                    className="btn btn-reply cancel"
                                                                ><i
                                                                    className="fa fa-trash"
                                                                    aria-hidden="true"
                                                                ></i>Cancel</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="display-comment"
                                                    style={{ marginLeft: "40px" }}
                                                >
                                                    <div className="comment-list">
                                                        <div
                                                            className="single-comment"
                                                        >
                                                            <img
                                                                src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                                                                alt="#"
                                                            />
                                                            <div
                                                                className="content"
                                                            >
                                                                <h4>
                                                                    User 1
                                                                    <span
                                                                    >At
                                                                        2023/05/11
                                                                        11:00:22
                                                                        On</span>
                                                                </h4>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit,
                                                                    amet
                                                                    consectetur
                                                                    adipisicing
                                                                    elit. Vitae,
                                                                    molestias.
                                                                </p>
                                                                <div
                                                                    className="button"
                                                                >
                                                                    <a
                                                                        href="#"
                                                                        className="btn btn-reply reply"
                                                                        data-id="{{ $comment->id }}"
                                                                    ><i
                                                                        className="fa fa-reply"
                                                                        aria-hidden="true"
                                                                    ></i>Reply</a>
                                                                    <a
                                                                        href=""
                                                                        className="btn btn-reply cancel"
                                                                    ><i
                                                                        className="fa fa-trash"
                                                                        aria-hidden="true"
                                                                    ></i>Cancel</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <Sidebar blogs={blogs} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BlogDetail