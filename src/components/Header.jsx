import React, { useEffect, useState } from "react";
import Logo from "../logo/logo.svg";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Collapse } from '@mui/material';

//dropdown
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [lang, setLang] = useState(false);
  const [langText, setLangText] = useState('ENG')

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

  useEffect(()=>{
    document.addEventListener('click',function(e){
      const con = document.querySelector('.hamburger_con');
      const langCon = document.querySelector('.lang_con');
      const langMobileCon = document.querySelector('.langMobile_con')
      if(!langCon.contains(e.target) && !langMobileCon.contains(e.target)){
        setLang(false);
      }
      if(con){
        if(!con.contains(e.target)){
          setOpenMenu(false);
        }
      }
      const links = document.querySelectorAll('.hamburger_con a');
      for(let i = 0; i<links.length; i++){
        links[i].addEventListener('click',function(){
          setOpenMenu(false);
        })
      }
    })
  },[])

  const changeLanguage = (lang) => {
    setLangText(lang);
    setLang(false);
  }
  return (
    <div className="container">
      <svg
        className="line_svg_mobile"
        width="257"
        height="475"
        viewBox="0 0 257 475"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.76969 202.59C2.20587 199.735 2.82271 196.93 3.6139 194.205C10.876 169.184 29.456 158.005 49.1258 146.166C62.9478 137.845 77.2436 129.242 87.3134 115.384C96.9825 102.078 102.245 84.5285 107.349 67.5574C110.12 58.3118 112.988 48.7528 116.544 39.8925C127.285 13.1405 150.767 -7.96895 169.97 4.57452C184.712 14.2061 188.789 38.4045 189.907 51.9691C190.353 57.3821 190.585 62.9358 190.809 68.3103C191.347 81.2092 191.901 94.5469 195.489 106.653C200.621 123.95 211.376 137.068 221.776 149.747C227.714 156.952 233.811 164.42 238.927 172.643C254.17 197.148 260.174 232.111 254.986 266.178C250.629 294.79 239.136 319.295 222.622 335.184C215.411 342.111 207.225 347.788 199.3 353.279C184.271 363.694 170.073 373.529 161.455 391.37C156.877 400.844 154.415 411.871 152.031 422.529C150.863 427.744 149.659 433.138 148.215 438.319C144.983 449.925 137.339 470.006 122.455 474.15C104.202 479.229 87.4381 455.235 83.2323 429.632C81.5106 419.136 81.0517 408.201 80.6307 397.625C80.0576 383.859 79.4644 369.62 76.0441 356.445C69.7077 332.099 54.5886 313.938 39.9642 296.37C36.1202 291.753 32.1591 286.982 28.4054 282.176C18.6275 269.658 -3.45318 236.888 1.76969 202.59ZM253.669 265.819C258.78 232.254 252.877 197.814 237.877 173.701C232.818 165.572 226.731 158.153 220.849 150.979C210.342 138.17 199.474 124.927 194.237 107.249C190.577 94.896 190.012 81.4242 189.469 68.3867C189.246 63.0354 189.015 57.5047 188.569 52.1489C187.478 38.9285 183.531 15.3746 169.349 6.10633C150.869 -5.95329 128.152 14.6671 117.709 40.6473C114.174 49.4215 111.331 58.9407 108.575 68.1443C103.438 85.273 98.1281 102.988 88.2806 116.541C78.0282 130.645 63.6156 139.322 49.6735 147.71C30.26 159.396 11.9136 170.428 4.85371 194.784C4.08636 197.427 3.48839 200.146 3.06589 202.915C-2.03199 236.392 19.7091 268.62 29.2953 280.924C33.0176 285.704 36.9881 290.472 40.8244 295.081C55.5677 312.793 70.8173 331.107 77.2576 355.869C80.7392 369.247 81.3369 383.602 81.9135 397.488C82.3531 408.001 82.8042 418.871 84.5064 429.236C88.5762 454.027 104.676 477.3 122.154 472.433C136.935 468.321 144.407 446.778 146.935 437.712C148.362 432.585 149.562 427.218 150.722 422.03C153.132 411.253 155.625 400.113 160.301 390.429C169.112 372.19 184.125 361.788 198.652 351.727C206.52 346.262 214.684 340.62 221.809 333.768C238.071 318.142 249.372 294.007 253.664 265.818L253.669 265.819Z"
          fill="#1D4CF2"
        />
      </svg>
      <div className="header_mobile">
        <div className="hamburger_con">
          <svg
            className="hamburger"
            onClick={() => setOpenMenu(!openMenu)}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7.5H21"
              stroke="#1846E8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 12.5H21"
              stroke="#1846E8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 17.5H21"
              stroke="#1846E8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          {
            openMenu ? 
            <div className="menu_mobile">
              <NavLink to={"/"}>Home <span></span></NavLink>
              <NavLink to={"/info"}>Information <span></span></NavLink>
              <div className="menu_dropdown">
                <div className="dropdown_main" onClick={()=>setMenuDropdown(!menuDropdown)}>
                  Our Courses
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="white"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Collapse in={menuDropdown} className="dropdown_options">
                  <NavLink to={'ourCourses'} className="option"><span></span>Full Courses</NavLink>
                  <NavLink to={'courses?name=web'} className="option"><span></span>Web Development</NavLink>
                  <NavLink to={'courses?name=app'} className="option"><span></span>App Development</NavLink>
                  <NavLink to={'courses?name=design'} className="option"><span></span>UI/UX design</NavLink>
                  <NavLink to={'courses?name=it'} className="option"><span></span>IT administration </NavLink>
                </Collapse>
                <span></span>
              </div>
              <NavLink to={"/about"}>About <span></span></NavLink>
              <NavLink to={"/news"}>News <span></span></NavLink>
            </div>:''
          }
        </div>
        <img src={Logo} alt="Logo" />

        <div className="langMobile_con">
          <div className="langMobile" onClick={()=>setLang(!lang)}>{langText}</div>
          {
            lang ? 
              <div className="langMobile_options">
                {
                  langText !== 'РУС'?
                  <span id="rus" onClick={()=>changeLanguage('РУС')}>РУС</span>:''
                }
                {
                  langText !== 'TKM'?
                  <span id="rus" onClick={()=>changeLanguage('TKM')}>TKM</span>:''
                }
                {
                  langText !== 'ENG'?
                  <span id="rus" onClick={()=>changeLanguage('ENG')}>ENG</span>:''
                }
              </div>:''
          }
        </div>
      </div>

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
                  <span className="line"></span>
                </Link>
                <Link to={"/courses?name=app"}>
                  <MenuItem className="link" onClick={handleClose}>
                    App Development
                  </MenuItem>
                  <span className="line"></span>
                </Link>
                <Link to={"/courses?name=design"}>
                  <MenuItem className="link" onClick={handleClose}>
                    UI/UX design
                  </MenuItem>
                  <span className="line"></span>
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

          <div className="lang_con lang">
            <span onClick={()=>setLang(!lang)}>{langText}</span>
            {
              lang ?
                <div className="dropdown lang">
                  {
                    langText !== 'РУС'?
                    <span id="rus" onClick={()=>changeLanguage('РУС')}>РУС</span>:''
                  }
                  {
                    langText !== 'TKM'?
                    <span id="rus" onClick={()=>changeLanguage('TKM')}>TKM</span>:''
                  }
                  {
                    langText !== 'ENG'?
                    <span id="rus" onClick={()=>changeLanguage('ENG')}>ENG</span>:''
                  }
                </div>:''
            }
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
