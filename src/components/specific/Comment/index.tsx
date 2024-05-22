import { faReply, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

interface Comment {
    id: string,
    image: string,
    username: string,
    createdDate: string,
    content: string,
    isParent: boolean,
    childComment: Comment | undefined
}

const Comment = ({ data, ...props }: {
    data: Comment
}) => {
    return (
        <div className="display-comment">
            <div className="comment-list">
                <div className={`single-comment ${!data.isParent ? "single-comment-child": ""}`}>
                    <img src={data.image}
                        alt="#" />
                    <div className="content">
                        <h4>
                            {data.username}
                            <span
                            >At
                                {data.createdDate}</span>
                        </h4>
                        <p>
                            {data.content}
                        </p>
                        <div className="button">
                            <a
                                href="#"
                                className="btn btn-reply reply"
                                data-id="#"
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
                {data.childComment && <Comment data={data.childComment} />}
            </div>
        </div>
    )
}

export default Comment