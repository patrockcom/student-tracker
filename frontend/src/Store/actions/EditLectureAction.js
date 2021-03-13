// src/Store/actions/EditLectureAction

import baseUrl from '../../Helpers/BaseUrl';

export const EditLectureAction = (lecture_id, lecture, history) => (dispatch, getState) => {
    const {title, description } = lecture
    const token = getState().token
    const config={
        method: 'PATCH',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }), 
        body: JSON.stringify({title, description})
    };

    fetch(`${baseUrl}/backend/api/lectures//${lecture_id}`, config)
    .then(response => response.json())
    .then((data)=>{
        dispatch({type: 'GET_LECTURE_DATA', payload: data})
         history.push("/lecture")
    });
}
