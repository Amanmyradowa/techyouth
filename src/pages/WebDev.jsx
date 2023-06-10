import React,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';
import Cart from '../components/Cart';
import { WebStudentsDatas } from '../datas/student_datas/web_datas';
import { AppStudentsDatas } from '../datas/student_datas/app_datas';
import {useNavigate} from "react-router-dom";
import { UiUxStudentsDatas } from '../datas/student_datas/ui_ux_datas';
import { ItStudentsDatas } from '../datas/student_datas/it_datas';
import { Link } from "react-router-dom";


const WebDev = () => {
  const navigate = useNavigate();
  const [activeButton,setActiveButton] = useState(false);
  const [students,setStudents] = useState([]);
  useEffect(()=>{
    const name = window.location.search.split('=')[1];
    if(name === 'web'){
      setStudents(WebStudentsDatas);
      setActiveButton(0)
    }else if(name === 'app'){
      setStudents(AppStudentsDatas);
      setActiveButton(1)
    }else if(name === 'design'){
      setStudents(UiUxStudentsDatas);
      setActiveButton(2)
    }else if(name === 'it'){
      setStudents(ItStudentsDatas);
      setActiveButton(3)
    }
  },[window.location.search]);
  
  return (
    <div className="web_page_con">
    <div className='container'>
      <div className="web_page">
        <div className="web_page_top">
          <Link to={'/courses?name=web'}>
            <Button
              sx={{padding: '10px 35px'}}
              variant={activeButton===0 ? 'contained' : 'outlined'}
              onClick={()=>navigate('/courses?name=web')}
              >
                WEB
            </Button>
          </Link>
          <Link to={'/courses?name=app'}>
            <Button
              sx={{padding: '10px 35px'}}
              variant={activeButton===1 ? 'contained' : 'outlined'}
              >
                APP
            </Button>
          </Link>
          <Link to={'/courses?name=design'}>
            <Button
              sx={{padding: '10px 35px'}}
              variant={activeButton===2 ? 'contained' : 'outlined'}
              >
                UI\UX
            </Button>
          </Link>
          <Link to={'/courses?name=it'}>
            <Button
              sx={{padding: '10px 35px'}}
              variant={activeButton===3 ? 'contained' : 'outlined'}
              >
                IT
            </Button>
          </Link>
        </div>
        <div className="cards">
          {
            students.map((cart, i) => (
              <Cart key={i} img={cart.img} name={cart.firstName} lName={cart.lastName} hide={cart.job === 'System Adminstrator' || cart.job === 'Ui/Ux Designer'} courses={cart.job} in={cart.inLink} git={cart.githubLink}/>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default WebDev