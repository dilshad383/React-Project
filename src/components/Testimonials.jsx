import '../App.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeader from './SectionHeader';

function Testimonials(){
    return(
        <>
        <div className="wrapper">
            <SectionHeader 
            pill='Their Happy Words 🤗'
            title='Our Testimonials'
            text='Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.'
            />

            <div className="card-wrapper mt-4 relative">
                {/* Custom navigation buttons */}
                <div className="swiper-button-prev absolute top-1/2 left-0 z-10 cursor-pointer -translate-y-1/2">
                    <img src="/assets/icons/prev-icon.png" alt="Previous" />
                </div>
                <div className="swiper-button-next absolute top-1/2 right-0 z-10 cursor-pointer -translate-y-1/2">
                    <img src="/assets/icons/next-icon.png" alt="Next" />
                </div>
                
                <Swiper
        // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className='w-5/6'
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    }}
                >
                    <SwiperSlide>
                        <div className="card border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] rounded-md py-10 bg-white">
                            <div className="card-header justify-items-center">
                                <img className='my-3' src="/assets/icons/jennifer.png" alt="" />
                                <h4>Jennifer B</h4>
                                <img className='my-2' src="/assets/icons/stars.png" alt="" />
                            </div>
                            <p className='px-10 mt-6 text-center'>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] rounded-md py-10 bg-white">
                            <div className="card-header justify-items-center">
                                <img className='my-3' src="/assets/icons/david.png" alt="" />
                                <h4>David K</h4>
                                <img className='my-2' src="/assets/icons/stars.png" alt="" />
                            </div>
                            <p className='px-10 mt-6 text-center'>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] rounded-md py-10 bg-white">
                            <div className="card-header justify-items-center">
                                <img className='my-3' src="/assets/icons/emily.png" alt="" />
                                <h4>Emily L</h4>
                                <img className='my-2' src="/assets/icons/stars.png" alt="" />
                            </div>
                            <p className='px-10 mt-6 text-center'>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
        </>
    )
}

export default Testimonials