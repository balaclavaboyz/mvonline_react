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
list.forEach((i) => {
    console.log("list=> " + i);
});

export default function Gallery() {
    return (
        <>
            <div className="banner">
                <div className="container container_column color_white">
                    <h1>Moda Fast Fashion</h1>
                    <p>Atual Conforto Qualidade</p>
                </div>
            </div>
            <div className="container container_column">
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
                                            style={{ aspectRatio: 4 / 5 }}
                                        />
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
