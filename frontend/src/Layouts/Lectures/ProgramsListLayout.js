import React, {Component} from 'react';

//style
import {ListLecturesStyled} from './styleLecturesLayout';

//components
import ProgramCardComponent from '../../Components/Lectures/ProgramCardComponent';
import CoursesHomePage from '../../Layouts/Lectures/CoursesHomePage';
import SearchBar from '../../Components/Searchbar/Searchbar';

//redux
import {connect} from 'react-redux';
import {GetAllPrograms} from "../../Store/actions/GetAllLecturesActions";
import {SearchProgramsByName} from "../../Store/actions/SearchLecturesActions";
import StudentProfileCard
    from "../../Components/StudentProfileCard/StudentProfileCard";
import {ListTeachersStyled} from "../Lists/style";

class ProgramsListLayout extends Component {
    state={
        name:'',
    }

    searchName=(e)=>{
        e.preventDefault()
        this.setState({name : e.target.value})
    }

    searchingAction =(e)=>{
        e.preventDefault()
        this.props.dispatch(SearchProgramsByName(this.state.name))
    }

    componentDidMount(){
        console.log('mounting in Programs List');
        this.props.dispatch(GetAllPrograms())
    }

    render(){
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <SearchBar name={this.state.name } searchName={this.searchName} searchingAction={this.searchingAction}/>
                    <div className="lectures">
                        { this.props.get_all_programs && !this.props.search_programs.length ? this.props.get_all_programs.map((data, index)=>
                            <ProgramCardComponent key={index} data={data} />) : this.props.search_programs.length ?
                            this.props.search_programs.map((data, index)=>
                                <ProgramCardComponent key={index} data={data} />) :
                            'Loading '}
                    </div>
                </div>
            </ListLecturesStyled>
        )}
}

const mapStateToProps = (state) => {
    console.log("Programs: ",state.get_all_programs);
    return {
        token: state.token,
        get_all_programs: state.get_all_programs,
        search_programs: state.search_programs,
    }};


export default connect(mapStateToProps) (ProgramsListLayout);
