import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

var list = [];
const path = import.meta.glob(`../public/gallery/*`);
Object.keys(path).forEach((i) => {
    list.push(i.slice(18));
    // exatamente 18 char para ler as fotos
});
var list2 = [];
const path2 = import.meta.glob(`../public/gallery2/*`);
Object.keys(path2).forEach((i) => {
    list2.push(i.slice(18));
    // exatamente 18 char para ler as fotos
});

export default function Gallery() {
    return (
        <>
            <div className="banner">
                <div className="container container_column color_white title">
                    <h1 className="mobile-none">Moda Fast Fashion</h1>
                    <h1 className="mobile-block mobile_banner_title">
                        Moda Fast Fashion
                    </h1>
                    <p>Atual Conforto Qualidade</p>
                </div>
            </div>
            <div className="container carousel_margin carousel_mobile_column">
                <div className="container container_column carousel">
                    <div className="swiper_container_gallery">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            {Object.entries(list).map((t, k) => (
                                <SwiperSlide>
                                    {/* resolver key para cada child de list */}
                                    <a href={"/gallery/" + t[1]}>
                                        <div className="swiper_slide_gallery">
                                            <img
                                                src={"/gallery/" + t[1]}
                                                alt="foto das roupas"
                                            />
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="container container_column carousel">
                    <div className="swiper_container_gallery">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            {Object.entries(list2).map((t, k) => (
                                <SwiperSlide>
                                    {/* resolver key para cada child de list */}
                                    <a href={"/gallery2/" + t[1]}>
                                        <div className="swiper_slide_gallery">
                                            <img
                                                src={"/gallery2/" + t[1]}
                                                alt="foto das roupas"
                                            />
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}
