import { baseURL } from '../constants';


export const PostAGrade = (history, studentInfo) => (dispatch, getState) => {
    
    const token = getState().token
    const config={
        method: 'POST',
        body: JSON.stringify(studentInfo),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }), 
    };

    fetch(`${baseURL}/grade/`, config)
    .then(response => response.json())
    .then((data)=>{
        dispatch({type: 'POST_GRADE_DATA', payload: data})
         history.push("/grademe")
    });
}
