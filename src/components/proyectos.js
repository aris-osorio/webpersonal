import 'swiper/swiper.scss';
import MemeChat from './memeChat';
import SimpleTasks from './simpleTasks'
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
                <div className="container vh-100 pt-5 pb-5 pl-0 pr-0">
                    <div className="col-12 d-flex justify-content-center p-5">
                        <h1 className="subtitle julius yellow">Proyectos</h1>
                    </div>
                    <Swiper 
                        className="aparece"
                        effect="coverflow"
                        spaceBetween={50}
                        slidesPerView={3}
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