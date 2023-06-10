import React from 'react';

const SwiperCart = (props) => {
  return (
    <div className='swiper_cart'>
      <div className="swiper_img_con">
        <img className='swiper_img' src={props.img} alt="" />
      </div>
      <div className="swiper_texts">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}<br />{props.br}</div>
        <div className="cart_texts_bottom">
          <div className="date">{props.date}</div>
          <div className="location">{props.location}</div>
        </div>
      </div>
    </div>
  )
}

export default SwiperCart