import React from 'react'

//style
import {LectureProfileCardStyled} from './StyleLecturesComponent'

const ProgramCardComponent = (props) => {

    return (
         <LectureProfileCardStyled>
            <p>{props.data.name}</p>
         </LectureProfileCardStyled>
    )
}

export default ProgramCardComponent
