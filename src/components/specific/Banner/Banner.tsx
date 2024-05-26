import React from "react";

type Props = {
    id: number;
    data: any;
};

const Banner = ({ id, data, ...props }: Props) => {
    return (
        <div className="single-banner">
            <img src={data.image} alt="#" />
            <div className="content">
                <h3>{data.title}</h3>
                <a href={data.link}>Discover Now</a>
            </div>
        </div>
    );
};

export default Banner;
