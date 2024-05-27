"use client";

import { BannerModel } from "@/models/Banner/BannerModel";
import { Filter } from "@/models/Http/Filter";
import { PageResponse } from "@/models/Http/PageResponse";
import { Sort } from "@/models/Http/Sort";
import { BannerService } from "@/services/Banner/BannerService";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps } from "next";
import React from "react";
import { Carousel } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

type Props = {
    id: string;
    data: BannerModel[];
};

const Slider = ({ id, data, ...props }: Props) => {
    console.log(data);
    return (
        <section id={id}>
            banner
            {/* <Carousel slide={false} wrap={true}>
                {data.map((item) => (
                    <Carousel.Item>
                        <img src={item.photo} alt="#" />
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
            </Carousel> */}
        </section>
    );
};

export default Slider;
