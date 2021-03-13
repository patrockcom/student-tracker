import { GradesCardStyle, StudentDetailStyle, CardDetailStyle } from './style';
import rocket_3  from '../../Assets/rocket_3.png';


const GradesCard = ({grade}) => {
  console.log('testing the grades',grade)
        return (
           <GradesCardStyle>
              <div className='image-card'>
                 <img src={grade.student.profile_picture} alt='student' height='40px' width='40px' id='profile-picture'/>   
              </div>
            <StudentDetailStyle>
               <div className="student-detail">
                    <h2>{grade.student.first_name}</h2>
                    <p className='student-detail'>Lecture</p>
                    <p className='student-detail'>Group</p>
                    <p className='student-detail'>Grade</p>
                    <p className='student-detail'>Reviewer</p>
               </div>
               <div className="student-detail">
                    <h2>{grade.student.last_name}</h2>
                    <CardDetailStyle>{grade.lecture.title}</CardDetailStyle>
                    <CardDetailStyle>{grade.group.name}</CardDetailStyle>
                    <CardDetailStyle>{grade.grade}</CardDetailStyle>
                    <CardDetailStyle>{grade.reviewer.last_name}</CardDetailStyle>
             </div>
           </StudentDetailStyle>         
          </GradesCardStyle> 
        )
    }    


export default GradesCard;