// src/Components/LecturesLayout/LectureCardComponent

import React from 'react'

//style
import {LectureProfileCardStyled} from './StyleLecturesComponent'

import {useHistory} from 'react-router-dom';

const LectureCardComponent = ({data}) => {
    const history = useHistory();

    const RedirectToLectureOnClickHandler =()=> {
        history.push(`/lecture_detail/${data.id}`)
    }
    return (
        <LectureProfileCardStyled onClick={RedirectToLectureOnClickHandler}>
            <p>{data.title}</p>
        </LectureProfileCardStyled>
    )
}

export default LectureCardComponent
