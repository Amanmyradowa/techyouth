import React from 'react';
import {Button} from '@mui/material';
import Back from "../images/back2.png"
import BackMobile from "../images/back2Mobile.png"
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className='container'>
      <div className="page_info">
        <div className="info_page_left">
          <img className='imgBck' src={Back} alt="" />
        </div>

        <div className="info_page_right">
          <div className="title">
            TechYouth <span>Bootcamp</span>
          </div>
          <div className="text">
            Youth development activity. <br />
            First free digital education program. <br />
            This program is  aimed at teaching the main IT areas. The main components of our program are: <br />
          </div>
          <div className="info">
            <div className="num_text">
              <div className="num num1">01</div>
              <div className="num_text_text">
                Obtaining <span>professional</span> knowledge and experience
              </div>
            </div>
            <div className="num_text">
              <div className="num num2">02</div>
              <div className="num_text_text">
                Getting to know the mentors
              </div>
            </div>
            <div className="num_text">
              <div className="num num3">03</div>
              <div className="num_text_text">
                Various <span>event</span> meetings
              </div>
            </div>
            <div className="num_text">
              <div className="num num4">04</div>
              <div className="num_text_text">
                Portfolio
              </div>
            </div>
            <div className="num_text">
              <div className="num num5">05</div>
              <div className="num_text_text">
                <span>Certificate</span> of completion
              </div>
            </div>
          </div>
          <Link to={'/ourCourses'}>
            <Button style={{fontFamily: "mont", fontWeight: "700", fontSize: "16px"}} variant="contained">VIEW COURSES</Button>
          </Link>
          <img className='imgMobile' src={BackMobile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Info