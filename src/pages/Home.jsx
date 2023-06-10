import React from "react";
import Back from "../images/back.png";
import BackMobile from "../images/backMobile.png";
import Line from "../images/line.svg";
import LineMobile from "../images/lineMobile.svg";
import { Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="home">
        <div className="home_left">
          <div className="title">
            Learn a New Skill Everyday, Anytime, and Anywhere.
          </div>
          <img className="imgLine" src={Line} alt="" />
          <img className="lineMobile" src={LineMobile} alt="" />
          <p className="text">
            Every day <span>Bootcamp</span> brings with it a fresh set of
            learning possibilities.
          </p>
          {/* <Link to={"/info"}> */}
            <Button
              style={{
                fontFamily: "mont",
                fontWeight: "700",
                fontSize: "16px",
                zIndex:2,
              }}
              variant="contained"
              onClick={()=>navigate('/info')}
            >
              READ MORE
            </Button>
          {/* </Link> */}
        </div>
        <div className="home_right">
          <img className="imgBack" src={Back} alt="" />
          <div className="imageBackMobileCon">
            <img className="imgBackMobile" src={BackMobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
