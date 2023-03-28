import React from 'react'
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function SelectRole() {
    const [role, setRole] = useState("");
      const handleClick = (e) => {
        setRole(e.target.value);
        localStorage.setItem('role', role);
        
      };
      
  return (
    <React.Fragment>
      
      <Wrapper>
            <Link to='/register' className='btn btn-hero' onClick={handleClick} value={"teacher"}>
              Teacher
            </Link>
            <Link to='/register' className='btn btn-hero' onClick={handleClick} value={"admin"}>
              Admin
            </Link>
            <Link to='/register' className='btn btn-hero' onClick={handleClick} value={"student"}>
              Student
            </Link>
          
      </Wrapper>
    </React.Fragment>
  )
}

export default SelectRole