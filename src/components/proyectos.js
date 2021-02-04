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
                    <div className="col-12 d-flex justify-content-center p-5">
                        <h1 className="subtitle julius yellow">Proyectos</h1>
                    </div>
                    <Swiper 
                        className="aparece"
                        effect="coverflow"
                        spaceBetween={30}
                        slidesPerView = {3}
                        navigation
                        loop={true}
                        breakpoints=
                        {
                            {
                                200: 
                                {
                                    width: 200,
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                                400: 
                                {
                                    width: 418,
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                576: 
                                {
                                    width: 518,
                                    slidesPerView: 1,
                                    spaceBetween : 0,
                                },
                                823: 
                                {
                                    width: 765,
                                    slidesPerView: 3,
                                },
                                1077: 
                                {
                                    width: 1049,
                                    slidesPerView: 3,
                                },
                                1199.98: 
                                {
                                    width: 1142,
                                    slidesPerView: 3,
                                }
                            }
                        }
                        
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