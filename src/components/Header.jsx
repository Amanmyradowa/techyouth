import React, { useEffect, useState } from "react";
import Logo from "../logo/logo.svg";
import { Link, useLocation } from "react-router-dom";

//dropdown
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);
  const [language, setLanguage] = useState("ENG");

  useEffect(() => {
    const el = document.querySelectorAll(".navbar a");
    let path = location.pathname;
    for (let i = 0; i < el.length; i++) {
      el[i].classList.remove("active");
    }
    if (path === "/") {
      el[0].classList.add("active");
    } else if (path === "/info") {
      el[1].classList.add("active");
    } else if (path === "/about") {
      el[2].classList.add("active");
    } else if (path === "/news") {
      el[3].classList.add("active");
    }
  }, [location]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLang = (event) => {
    const lang = event.target.textContent;
    if (lang) {
      setLanguage(event.target.textContent);
    }
    setAnchorElLang(null);
  };

  const handleClickLang = (event) => {
    setAnchorElLang(event.currentTarget);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
          <svg
            className="line_svg"
            width="815"
            height="586"
            viewBox="0 0 815 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M318.787 4.55591C323.818 3.07893 328.96 2.01433 334.162 1.37288C381.914 -4.51732 419.578 24.2959 459.458 54.7962C487.485 76.227 516.467 98.3955 549.355 107.533C580.934 116.308 614.606 112.523 647.185 108.894C664.924 106.897 683.266 104.837 701.225 104.771C755.449 104.575 814.217 135.193 814.601 184.986C814.894 223.215 780.531 251.673 760.026 265.232C751.844 270.644 743.208 275.731 734.85 280.654C714.792 292.471 694.049 304.686 678.505 322.097C656.304 346.987 646.777 379.935 637.571 411.791C632.37 429.953 626.918 448.657 619.213 465.976C596.249 517.586 546.72 558.936 486.709 576.593C436.306 591.424 384.874 588.21 341.877 567.546C323.118 558.512 305.321 546.441 288.1 534.752C255.439 512.585 224.592 491.641 186.879 488.787C166.851 487.269 146.592 491.379 127.007 495.343C117.423 497.28 107.512 499.292 97.6895 500.633C75.6843 503.646 35.4259 504.65 12.95 477.573C-14.61 444.363 5.91689 390.06 42.3894 360.17C57.3437 347.922 74.3445 337.899 90.8124 328.251C112.219 315.643 134.363 302.6 151.792 284.644C183.986 251.43 196.935 205.344 209.462 160.765C212.752 149.048 216.166 136.963 219.855 125.275C229.465 94.8281 258.368 22.3331 318.787 4.55591ZM485.88 573.594C545.008 556.197 593.807 515.488 616.402 464.703C624.017 447.577 629.403 428.934 634.613 410.915C643.912 378.73 653.521 345.446 676.219 320.025C692.081 302.261 713.027 289.913 733.301 277.971C741.623 273.069 750.223 268.002 758.314 262.638C778.297 249.419 811.768 221.765 811.491 184.986C811.102 137.076 753.931 107.62 701.258 107.786C683.46 107.825 665.207 109.901 647.551 111.894C614.685 115.587 580.698 119.413 548.534 110.478C515.059 101.17 485.834 78.823 457.572 57.2015C418.21 27.0997 381.03 -1.35723 334.556 4.39608C329.512 5.01753 324.526 6.05015 319.648 7.48322C260.675 24.835 232.279 96.1832 222.806 126.059C219.124 137.662 215.725 149.764 212.439 161.458C199.808 206.401 186.754 252.882 154.007 286.654C136.317 304.904 113.993 318.053 92.3967 330.769C76.0508 340.401 59.1454 350.355 44.3793 362.454C9.06048 391.39 -11.0205 443.733 15.3748 475.529C37.6917 502.424 80.1035 499.851 97.2965 497.505C107.017 496.173 116.878 494.176 126.411 492.244C146.216 488.236 166.687 484.095 187.154 485.64C225.709 488.557 258.333 510.704 289.893 532.135C307.012 543.73 324.73 555.783 343.276 564.702C385.584 585.07 436.22 588.195 485.877 573.585L485.88 573.594Z"
              fill="#1D4CF2"
            />
          </svg>
        </div>

        <div className="left">
          <nav className="navbar">
            <Link className="active" to={"/"}>
              Home
            </Link>
            <Link to={"/info"}>Info</Link>
            <div>
              <button
                className="dropdown"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Our courses
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.37499 0.785005L6.71499 6.125L12.055 0.785004"
                    stroke="#1D4CF2"
                    strokeWidth="1.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Menu
                sx={{
                  opacity: "0.8",
                  top: "15px",
                  left: "-40px",
                  background: "transparent",
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to={"./ourCourses"}>
                  <MenuItem className="link" onClick={handleClose}>
                    Full Courses
                  </MenuItem>
                  <span className="line"></span>
                </Link>
                <Link to={"/courses?name=web"}>
                  <MenuItem className="link" onClick={handleClose}>
                    Web Development
                  </MenuItem>
                </Link>
                <Link to={"/courses?name=app"}>
                  <MenuItem className="link" onClick={handleClose}>
                    App Development
                  </MenuItem>
                </Link>
                <Link to={"/courses?name=design"}>
                  <MenuItem className="link" onClick={handleClose}>
                    UI/UX design
                  </MenuItem>
                </Link>
                <Link to={"/courses?name=it"}>
                  <MenuItem className="link" onClick={handleClose}>
                    IT administration
                  </MenuItem>
                </Link>
              </Menu>
            </div>

            <Link to={"/about"}>About</Link>
            <Link to={"/news"}>News</Link>
          </nav>
          <div className="languages">
            <div
              className="lang"
              id="basic-button"
              aria-controls={openLang ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openLang ? "true" : undefined}
              onClick={handleClickLang}
            >
              {language}
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorElLang}
              open={openLang}
              onClose={handleCloseLang}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseLang}>ENG</MenuItem>
              <MenuItem onClick={handleCloseLang}>RUS</MenuItem>
              <MenuItem onClick={handleCloseLang}>TKM</MenuItem>
            </Menu>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
