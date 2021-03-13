// src/Components/LecturesLayout/LectureEditComponent

import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';

//style
import {LectureProfileCardStyled} from './StyleLecturesComponent';

import {GetLectureById} from '../../Store/actions/GetAllLecturesActions';


//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import {GetUserById} from "../../Store/actions/GetUserData";
import {UserProfileCardStyled} from "../UserProfile/style";

const LectureEditComponent = (props) => {

    const [lectureInfo, setLectureInfo] = useState({})
    const dispatch = useDispatch()

    useEffect(async () => {

        console.log('mounting in Lecture Edit', await dispatch(GetLectureById(props.match.params.id)));
        setLectureInfo(await dispatch(GetLectureById(props.match.params.id)))

    }, [])

    return (
        <>
            {lectureInfo ?
                <LectureProfileCardStyled>
                    <div className="admin-profile">
                        <p>{props.title}</p>
                        <p>Title: {lectureInfo.title}</p>
                        <p>Exercise: {lectureInfo.exercise}</p>
                        <div className="user-info">
                            <p>user info</p>
                        </div>
                        <div className="edit-delete">
                            <Link to='/edit_lecture'>
                                <button><FontAwesomeIcon className="i"
                                                         icon={faEdit}
                                                         size='2x'/></button>
                            </Link>
                            <button><FontAwesomeIcon className="d"
                                                     icon={faTrashAlt}
                                                     size='2x'/></button>
                        </div>
                    </div>
                </LectureProfileCardStyled> : 'Loading'}
        </>)

}

export default withRouter(LectureEditComponent);
