import React from 'react';
import Back from '../images/back3.png'
import CourseCart from '../components/CourseCart';
import {Cart_datas} from "../datas/cart_datas";

const OurCourses = () => {
  return (
    <div className='page_our_courses'>
      <img src={Back} alt="" />
      <div className="container">
        <div className="page_main">
          <div className="title">
            TechYouth <span>Bootcamp</span>
          </div>
          <div className="text">
            The program for 2022 included 4 courses:
          </div>
          <div className="carts">

            {
              Cart_datas.map((cart, i) => (
                <CourseCart key={i} svg={cart.svg} title={cart.title} text={cart.text} link={cart.link} />
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCourses