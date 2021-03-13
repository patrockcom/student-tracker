// Store/actions/lectures.js

import baseUrl from '../../Helpers/BaseUrl';
import {
    FETCH_ALL_LECTURES, FETCH_CURRENT_LECTURE,
    FETCH_ALL_LECTUREWEEKS, FETCH_CURRENT_LECTUREWEEK,
    FETCH_ALL_PROGRAMS, FETCH_CURRENT_PROGRAM,
    FETCH_ALL_LESSONS, FETCH_CURRENT_LESSON,
}
    from "../actionTypes";

const fetchAllLecturesAction = (lectures) => {
    return {
        type: FETCH_ALL_LECTURES,
        payload: lectures,
    }
}

export const fetchAllLectures = () => async (dispatch, getState) => {
    const config = {
        method: "GET",
    }

    const response = await fetch(`${baseUrl}/backend/api/lectures/`, config)
    if (response.ok) {
        const json = await response.json()
        dispatch(fetchAllLecturesAction(json))
        return json
    }

    return null
}
const fetchCurrentLectureAction = (lecture) => {
    return {
        type: FETCH_CURRENT_LECTURE,
        payload: lecture,
    }
}

export const fetchCurrentLecture = (lecture_id) => async (dispatch, getState) => {
    const config = {
        method: "GET",
    }

    const response = await fetch(`${baseUrl}/backend/api/lectures/${lecture_id}`, config)
    if (response.ok) {
        const json = await response.json()
        dispatch(fetchCurrentLectureAction(json))
        return json
    }

    return null
}
