// src/Layouts/LecturesLayout/EditLectureLayout
//
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//style
import {EditLectureStyled} from './styleLecturesLayout';

//Redux
import {connect} from 'react-redux';
import {EditLectureAction} from '../../Store/actions/EditLectureAction';


class EditLectureLayout extends Component {
    state = {
        lecture: this.props.lecture_data
    }

    formHandler = (e) => {
        const {value, name} = e.target
        this.setState({

            lecture: {...this.state.lecture, [name]: value}
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(EditLectureAction(this.state.id, this.state.lecture, this.props.history))

    }

    render() {
        console.log(this.props.history);
        return (
            <EditLectureStyled>
                <div className="edit-profile">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-col">
                            <label htmlFor="lecturetitle">Lecture title</label>
                            <input type="text" name="title"
                                   value={this.state.title ? this.state.lecture.title : ''}
                                   onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                        </div>

                        <div className="form-btns">
                            <button className="btn-save" type='submit'>Save
                            </button>
                            <Link to='/profile'>
                                <button className="btn-cancle">Cancle</button>
                            </Link>
                        </div>
                    </form>

                </div>
            </EditLectureStyled>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lecture_data: state.lecture_data
    }
}

export default connect(mapStateToProps)(EditLectureLayout)
