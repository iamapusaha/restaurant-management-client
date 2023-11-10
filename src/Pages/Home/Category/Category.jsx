// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                header={'ORDER ONLINE'}
                subHeader={'From 11:00am to 10:00pm'}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-16"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className='text-3xl text-center font-normal uppercase text-white -mt-10'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='text-3xl text-center font-normal uppercase text-white -mt-10'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='text-3xl text-center font-normal uppercase text-white -mt-10'>soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className='text-3xl text-center font-normal uppercase text-white -mt-10'>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <p className='text-3xl text-center font-normal uppercase text-white -mt-10'>Salads</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;