import React from 'react';
import GradesCard from  '../../Components/GradesCard/index'
import Navigation from '../../Components/Navigation/Navigation';
import { MainGradesStyle } from './style'
import { useEffect } from 'react';
import { useSelector,useDispatch }  from 'react-redux';
import { fetchAllStudentGrades} from '../../Store/actions/grades.js'
import { Link } from 'react-router-dom';
import logoPropulsion from "../../Assets/propulsion-logo.png";

const Grades = () => {
    const grades = useSelector( state => state.all_grades)
    const dispatch = useDispatch()
       console.log('grade',grades)
          useEffect(() => {
          dispatch(fetchAllStudentGrades())
          }, [dispatch])

    return (
           <MainGradesStyle>
                <Navigation/>
             <section className="grades-card-container">
            <section className="filter-grades">
                <img src={logoPropulsion} className='logo-header' alt="propulsion logo" width='70px' height='70px'/>
                <Link to='/grademe'><button className='button-grade-me'>Grade Me</button></Link>
            </section>
                 {grades.length ? grades.map((grade) => <GradesCard grade={grade} key={grade.id}/>) : "Loading ..."}
             </section>  
           </MainGradesStyle>       
      
    )
}

export default Grades;