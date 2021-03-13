import React, {Component} from 'react';

//style
import {ListLecturesStyled} from './styleLecturesLayout';

//components
import LectureProfileCard from '../../Components/Lectures/LectureCardComponent';
import Navigation from '../../Components/Navigation/Navigation';
import CoursesHomePage from '../../Layouts/Lectures/CoursesHomePage';
import TitleSearchBar from '../../Components/Searchbar/TitleSearchBar';

//redux
import {connect} from 'react-redux';
import {GetAllLectureWeeks} from "../../Store/actions/GetAllLecturesActions";
import {SearchLectureWeeksByTitle} from "../../Store/actions/SearchLecturesActions";
import StudentProfileCard
    from "../../Components/StudentProfileCard/StudentProfileCard";
import {ListTeachersStyled} from "../Lists/style";

class LectureWeeksListLayout extends Component {
    state={
        title:'',
    }

    searchTitle=(e)=>{
        e.preventDefault()
        this.setState({title : e.target.value})
    }

    searchingAction =(e)=>{
        e.preventDefault()
        this.props.dispatch(SearchLectureWeeksByTitle(this.state.title))
    }

    componentDidMount(){
        console.log('mounting in LectureWeeks List');
        this.props.dispatch(GetAllLectureWeeks())
    }

    render(){
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <TitleSearchBar title={this.state.title } searchTitle={this.searchTitle} searchingAction={this.searchingAction}/>
                    <div className="lectures">
                        { this.props.get_all_lectureweeks && !this.props.search_lectureweeks.length ? this.props.get_all_lectureweeks.map((data, index)=>
                            <LectureProfileCard key={index} data={data} />) : this.props.search_lectureweeks.length ?
                            this.props.search_lectureweeks.map((data, index)=>
                                <LectureProfileCard key={index} data={data} />) :
                            'Loading '}
                    </div>
                </div>
            </ListLecturesStyled>
        )}
}

const mapStateToProps = (state) => {
    console.log("LectureWeeks: ",state.get_all_lectureweeks);
    return {
        token: state.token,
        get_all_lectureweeks: state.get_all_lectureweeks,
        search_lectureweeks: state.search_lectureweeks,
    }};


export default connect(mapStateToProps) (LectureWeeksListLayout);
