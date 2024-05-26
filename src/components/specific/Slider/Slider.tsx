"use client";

import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Carousel } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

interface Slider {
    id: string;
    image: string;
    createdDate: string;
    author: string;
    title: string;
    description: string;
    link: string;
}

type Props = {
    id: string;
    data: Slider[];
};

const Slider = ({ id, data, ...props }: Props) => {
    return (
        <section id={id}>
            <Carousel slide={false} wrap={true}>
                {data.map((item) => (
                    <Carousel.Item>
                        <img src={item.image} alt="#" />
                        <Carousel.Caption>
                            <h1 className="wow fadeInDown">{item.title}</h1>
                            <p>{item.description}</p>
                            <a
                                className="btn btn-lg fadeInUpBig"
                                href={item.link}
                                role="button"
                            >
                                Shop Now
                                <FontAwesomeIcon icon={faCircleArrowRight} />
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default Slider;
