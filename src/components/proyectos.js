import 'swiper/swiper.scss';
import MemeChat from './memeChat';
import SimpleTasks from './simpleTasks';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import SwiperCore,{ EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Proyectos() {
    
    return (
        <section id="proyectos">
            <div className="bg-black">
                <div className="container pt-5 pb-5">
                    <div className="col-12 d-flex justify-content-center pt-5 pb-3">
                        <h1 className="subtitle yellow">Proyectos</h1>
                    </div>
                    <Swiper 
                        className="aparece"
                        effect="coverflow"
                        spaceBetween={50}
                        slidesPerView = {1}
                        navigation
                        loop={true}
                    >
                        <SwiperSlide><MemeChat/></SwiperSlide>
                        <SwiperSlide><SimpleTasks/></SwiperSlide>
                        <SwiperSlide><MemeChat/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}