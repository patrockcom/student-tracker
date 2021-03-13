import React from 'react';
import { PostAGrade} from '../../Store/actions/PostAGrade';
import { FormCreateGradeStyle } from './style.js';
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import logoPropulsion from "../../Assets/propulsion-logo.png";

const GradeMe = (props) => {
   const dispatch = useDispatch()
   const history = useHistory()
   const [studentInfo, setStudentInfo] = useState({
      first_name: '',
      last_name: '',
      lecture: '',
      group: '',
      grade: '',
   })

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('mounting')      

   }
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setStudentInfo({...studentInfo,[name]: value})
   }
    return (
       <>
         <FormCreateGradeStyle>
            <section className='main-top-field'>
                <h2 className='rating'>Grade your Student</h2>
                <img src={logoPropulsion} className='logo-header-2' alt="propulsion logo" width='70px' height='70px'/>
            </section>
            <section className='input-field-container'>
                <input type="text" name='first_name' value={studentInfo.first_name} onChange={onChangeHandler} className='create-grade-input' placeholder='Firstname'/>
                <input type="text" name='last_name' value={studentInfo.last_name} onChange={onChangeHandler} className='create-grade-input' placeholder='Lastname'/>
                <input type="text" name='lecture' value={studentInfo.lecture.title} onChange={onChangeHandler} className='create-grade-input' placeholder='Lecture'/>
                <input type="text" name='group' value={studentInfo.group} onChange={onChangeHandler} className='create-grade-input' placeholder='Group'/>
                <input type="text" name='grade' value={studentInfo.grade} onChange={onChangeHandler} className='create-grade-input' placeholder='Grade'/>
            </section>
            <section className='middle-button-container'>
                <button className="grade-button" onClick={handleSubmit}>Grade</button>
            </section>   
          </FormCreateGradeStyle>  
       </>
           
       
    )
}
export default GradeMe;