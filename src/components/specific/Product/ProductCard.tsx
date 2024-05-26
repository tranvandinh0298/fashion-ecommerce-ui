import React from "react";

type Props = {
    data: {
        id: number;
        name: string;
        price: number;
        defaultImage: string;
        hoverImage: string;
        description: string;
        stock: number;
        isNew: boolean;
        condition: string;
        category: {
            id: number;
            name: string;
            image: string;
        };
        brand: {
            id: number;
            name: string;
            image: string;
        };
    };
};

const ProductCard = ({ data, ...props }: Props) => {
    return (
        <div className="single-product">
            <div className="product-img">
                <a href="#">
                    <img
                        className="default-img"
                        src={data.defaultImage}
                        alt="#"
                    />
                    <img className="hover-img" src={data.hoverImage} alt="#" />
                    {data.stock < 0 && (
                        <span className="out-of-stock">Sold Out</span>
                    )}
                    {(() => {
                        if (data.stock < 0) {
                            <span className="out-of-stock">Sold Out</span>
                        }

                        return null;
                    })()}
                    <span className="new">New</span>
                    <span className="price-dec">10% Off</span>
                </a>
                <div className="button-head">
                    <div className="product-action">
                        <a
                            data-toggle="modal"
                            data-target="#modal1"
                            title="Quick View"
                            href="#"
                        >
                            <i className="ti-eye"></i>
                            <span>Quick Shop</span>
                        </a>
                        <a title="Wishlist" href="#">
                            <i className="ti-heart"></i>
                            <span>Add to Wishlist</span>
                        </a>
                    </div>
                    <div className="product-action-2">
                        <a title="Add to cart" href="#">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3>
                    <a href="#">Quần âu</a>
                </h3>
                <div className="product-price">
                    <span>9,000đ</span>
                    <del style={{ paddingLeft: "4%" }}>10,000đ</del>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
