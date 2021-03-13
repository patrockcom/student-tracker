// src/Components/LectureOne/index.jsx

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { fetchCurrentLecture } from "../../Store/actions/lectures";

const SimpleCard = (props) => {
    const lecture = props.lecture
    const dispatch = useDispatch()
    const history = useHistory()

    const clickHandler = (e) => {
        dispatch(fetchCurrentLecture(lecture.id))
            .then((result) => {
                if (result) {
                    history.push("/lecture")
                }
            })
    }

    return (

            <p>{lecture.title}</p>

    )
}

export default SimpleCard;