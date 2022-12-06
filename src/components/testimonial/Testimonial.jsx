import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//Import Swiper React components
import {Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './testimonial.css'

//Import required modules
import { Pagination } from 'swiper';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sapiente alias! Repellendus a asperiores quos. Necessitatibus doloremque esse pariatur sed."
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo at omnis, dicta aut vel saepe nobis molestiae quod a blanditiis enim, distinctio nesciunt ad laboriosam."
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil nam, non blanditiis doloribus, esse iure placeat aliquam mollitia ut ad porro?"
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed consectetur voluptatibus blanditiis, velit reiciendis nostrum numquam quaerat harum eaque perspiciatis labore."
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container mySwiper" pagination={true} modules={[Pagination]}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial