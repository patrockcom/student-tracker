// src/Layouts/LecturesLayout/LectureDetailLayout

import React, {Component} from 'react';

//Style
import {ListLecturesStyled} from './styleLecturesLayout';
// Components
import Navigation from '../../Components/Navigation/Navigation';
import LectureEdit from '../../Components/Lectures/LectureEditComponent';

//Redux
import {connect} from 'react-redux';
import {GetAllLecturesActions} from '../../Store/actions/GetAllLecturesActions';
import CoursesHomePage from "./CoursesHomePage";
import TitleSearchBar from "../../Components/Searchbar/TitleSearchBar";
import UserProfileCard from "../../Components/UserProfileCard/UserProfileCard";

class LectureDetailLayout extends Component {
    componentDidMount() {
        console.log('mounting in Lecture Detail');
        this.props.dispatch(GetAllLecturesActions())
    }

    getCurrentDate(arg) {
        let d = new Date(arg),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('.');
    }

    render() {
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <div className="lectures">
                        <LectureEdit/>
                    </div>
                </div>
            </ListLecturesStyled>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('Get all LecturesLayout data:', state.get_all_lectures)
    return {
        get_all_lectures: state.get_all_lectures
    }
};

export default connect(mapStateToProps)(LectureDetailLayout);

