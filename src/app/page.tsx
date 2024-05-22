import Image from "next/image";

export default function Home() {
  return (
    <main>
        <section id="Gslider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li
                    data-target="#Gslider"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li data-target="#Gslider" data-slide-to="1" className=""></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img
                        className="first-slide"
                        src="https://avitek.vn/wp-content/uploads/2020/08/Hero-Banner-Placeholder-Dark-1024x480.png"
                        alt="First slide"
                    />
                    <div
                        className="carousel-caption d-none d-md-block text-left"
                    >
                        <h1 className="wow fadeInDown">Quần</h1>
                        <p>quần</p>
                        <a
                            className="btn btn-lg ws-btn wow fadeInUpBig"
                            href="http://localhost:8000/product-grids"
                            role="button"
                            >Shop Now<i
                                className="far fa-arrow-alt-circle-right"></i></a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="first-slide"
                        src="https://avitek.vn/wp-content/uploads/2020/08/Hero-Banner-Placeholder-Light-1024x480.png"
                        alt="First slide"
                    />
                    <div
                        className="carousel-caption d-none d-md-block text-left"
                    >
                        <h1 className="wow fadeInDown">Áo</h1>
                        <p>Áo</p>
                        <a
                            className="btn btn-lg ws-btn wow fadeInUpBig"
                            href="http://localhost:8000/product-grids"
                            role="button"
                            >Shop Now<i
                                className="far fa-arrow-alt-circle-right"></i></a>
                    </div>
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#Gslider"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#Gslider"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
            </a>
        </section>

        <section className="small-banner section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-banner">
                            <img
                                src="https://via.placeholder.com/600x370"
                                alt="#"
                            />
                            <div className="content">
                                <h3>Quần</h3>
                                <a href="#">Discover Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-banner">
                            <img
                                src="https://via.placeholder.com/600x370"
                                alt="#"
                            />
                            <div className="content">
                                <h3>Áo</h3>
                                <a href="#">Discover Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-banner">
                            <img
                                src="https://via.placeholder.com/600x370"
                                alt="#"
                            />
                            <div className="content">
                                <h3>Mũ</h3>
                                <a href="#">Discover Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
