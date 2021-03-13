import React from 'react'

//style
import {LectureProfileCardStyled} from './StyleLecturesComponent'

const LessonCardComponent = (props) => {

    return (
         <LectureProfileCardStyled>
            <p>{props.data.date}</p>
         </LectureProfileCardStyled>
    )
}

export default LessonCardComponent
