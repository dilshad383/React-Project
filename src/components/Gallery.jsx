import '../App.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Gallery({img1, img2, img3, img4, title, text}) {
    return(
        <>
        <div className="card border-2 mt-26 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-md  relative">

            <div className="card-wrapper ">
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
                    className='w-5/6 absolute -top-18'
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    }}
                >
                    
                        <div className="img-wrapper ">
                        <SwiperSlide className='max-md:ml-18 max-sm:ml-4'> 
                            {img1}   
                        </SwiperSlide>
                        <SwiperSlide>
                            {img2}
                        </SwiperSlide>
                        <SwiperSlide>
                            {img3}
                        </SwiperSlide> 
                        <SwiperSlide>
                            {img4}
                        </SwiperSlide> 
                        </div> 
                </Swiper>
            </div>

            <div className="text-wrapper w-11/12 mx-auto relative -top-8">
            <h1 className='font-semibold text-2xl mb-2'>{title}</h1>
            <p>{text}</p>
            </div>
        </div>
        </>
    )
}

export default Gallery