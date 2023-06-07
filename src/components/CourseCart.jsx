import React from 'react';
import { Link } from 'react-router-dom';

const CourseCart = (props) => {
  return (
    <Link to={props.link} className='cart'>
      {props.svg}
      <div className="cart_title">
        <p>{props.title}</p>
        <span className="line"></span>
      </div>
      <div className="cart_text">
        {props.text}
      </div>
    </Link>
  )
}

export default CourseCart