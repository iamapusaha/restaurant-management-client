import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section>
            <SectionTitle subHeader={'What Our Clients Say'} header={'TESTIMONIALS'}></SectionTitle>
            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(item => <SwiperSlide key={item._id}>
                            <div className="md:m-24 m-2 flex flex-col justify-center items-center text-center space-y-3 ">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="font-extrabold text-8xl"></FaQuoteLeft>
                                <p>{item.details}</p>
                                <h2 className="text-3xl font-medium uppercase text-[#CD9003]">{item.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section >
    );
};

export default Testimonials;