// Store/actions/GetAllLecturesActions.js

import baseUrl from '../../Helpers/BaseUrl';

export const GetAllLecturesActions = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectures/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_LECTURES', payload: data}));
}

//get lecture by id
export const GetLectureById = (lecture_id) => async (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    const response = await fetch(`${baseUrl}/backend/api/lectures/${lecture_id}`, config)
    const lecture = await response.json()
    console.log("response", lecture)
    return lecture
}

export const GetAllLectureWeeks = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lectureweeks/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_LECTUREWEEKS', payload: data}));
}

export const GetAllLessons = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/lessons/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_LESSONS', payload: data}));
}

export const GetAllPrograms = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }),
    };
    fetch(`${baseUrl}/backend/api/programs/`, config)
        .then(response => response.json())
        .then((data)=>dispatch({type: 'GET_ALL_PROGRAMS', payload: data}));
}
