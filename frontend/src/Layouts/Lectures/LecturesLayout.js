// Layouts/LecturesLayout/LecturesLayout.js

import Simplecard from '../../Components/LectureOne/index';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchAllLectures } from "../../Store/actions/lectures";

//Components
import Navigation from '../../Components/Navigation/Navigation';

//style
import {HomePageStyled} from './styleLecturesLayout';

const LecturesLayout = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const lectures = useSelector(state => state.lecturesReducer.all)
    const [filter, setFilter] = useState("lectures")

    useEffect(() => dispatch(fetchAllLectures()), [dispatch])

    dispatch(fetchAllLectures())
      .then(() => setFilter("lectures"))

    return (
        <HomePageStyled>
            <Navigation />
            <div className="lectures">
                <h1>Programs</h1>
                <p>Full-Stack Development Program / Batch 14</p>
                <h1>LectureWeeks</h1>
                <p>1 - JavaScript Fundamentals</p>
                <h1>Lectures</h1>
                <p>{lectures.map((lecture, id) => <Simplecard key={id} lecture={lecture} />)}</p>
                <p>React Hooks and High Order Components</p>
                <h1>Lesssons</h1>
                <p>2021-01-28,11:00,13:00</p>

            </div>
        </HomePageStyled>
    )
}

export default LecturesLayout;
