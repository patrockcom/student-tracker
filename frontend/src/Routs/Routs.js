import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Layouts
import withAuth from '../HOC/withAuth';
import SignIn from '../Layouts/SignIn/SignIn';
import SignUp from '../Layouts/SignUp/SignUp';
import About from '../Layouts/About/About';
import Grades from '../Layouts/Grades/Grades'
import Group from '../Layouts/Group/Group';


import HomePage from '../Layouts/HomePage/HomePage';
import GlobalGrades from '../Layouts/GlobalGrades/GlobalGrades';
// import LecturesList from '../Layouts/Lectures/LecturesList';
// import LecturesHomePage from '../Layouts/Lectures/LecturesHome';
import Construction from '../Components/Construction/Construction';
import LecturesList from '../Layouts/Lectures/LecturesListLayout';
import LectureWeeksList from '../Layouts/Lectures/LectureWeeksListLayout';
import LessonsList from '../Layouts/Lectures/LessonsListLayout';
import ProgramsList from '../Layouts/Lectures/ProgramsListLayout';

import CoursesHomePage from '../Layouts/Lectures/CoursesHomePage';

import Groups from '../Layouts/StudentsGroups/StudentsGroups';

//Layouts profile
import Profile from '../Layouts/Profile/Profile';
import ProfileStudent from '../Layouts/Profile/ProfileStudent';
import ProfileExpertise from '../Layouts/Profile/ProfileExpertise';
import ProfileProgram from '../Layouts/Profile/ProfileProgram';
import ProfileTeachers from '../Layouts/Lists/ProfileTeachers';
import StudentsList from '../Layouts/Lists/StudentsList';
import StudentsGroups from '../Layouts/Lists/StudentsGrops';
import StudentTracker from '../Layouts/StudentTracker/StudentTracker';
import EditProfile from '../Layouts/Profile/EditProfile/EditProfile';
import LectureDetail  from '../Layouts/Lectures/LectureDetailLayout';
import EditLecture from '../Layouts/Lectures/EditLectureLayout';
import GradeMe from '../Layouts/GradeMe/index'
//experts list
import GitExperts from '../Layouts/Lists/ExpertsArea/GitExperts';
import HtmlExperts from '../Layouts/Lists/ExpertsArea/HtmlExperts';
import SassExperts from '../Layouts/Lists/ExpertsArea/SassExperts';
import DjangoExperts from '../Layouts/Lists/ExpertsArea/DjangoExperts';
import DockerExperts from '../Layouts/Lists/ExpertsArea/DockerExperts';
import JavascriptExperts from '../Layouts/Lists/ExpertsArea/JavascriptExperts';
import NodeExperts from '../Layouts/Lists/ExpertsArea/NodeExperts';
import PythonExperts from '../Layouts/Lists/ExpertsArea/PythonExperts';
import ReactExperts from '../Layouts/Lists/ExpertsArea/ReactExperts';

const Routes = () => {
    return (

        <Router>
            <Switch>
                <Route path='/' exact component={SignIn} />
                <Route path='/sign_up' exact component={SignUp} />
                <Route path='/about' exact component={withAuth(About)} />
                <Route path='/home_page' exact  component={withAuth(HomePage)} />
                <Route path='/students_list' exact component={withAuth(StudentsList)} />
                <Route path='/students_groups' exact component={withAuth(StudentsGroups)} />
                <Route path='/student_tracker' exact  component={withAuth(StudentTracker)} />

                {/*/!*{ Groups }*!/*/}
                 <Route path='/group' excact component={withAuth(Group)} />

                {/* profile page */}
                <Route path='/profile' exact component={Profile} />
                <Route path='/git ' exact component={withAuth(ProfileStudent)} />
                <Route path='/profile_expertise' exact  component={withAuth(ProfileExpertise)} />
                <Route path='/profile_teachers_list' exact  component={withAuth(ProfileTeachers)} />
                <Route path='/profile_program' exact  component={withAuth(ProfileProgram)} />
                <Route path='/edit_profile' exact  component={withAuth(EditProfile)} />


                <Route path='/student_tracker' exact  component={withAuth(StudentTracker)} /> 
                <Route path='/global_grades/:id' exact  component={withAuth(GlobalGrades)} /> 
                <Route path='/construction' exact  component={withAuth(Construction)} /> 
                <Route path='/groups' exact  component={withAuth(Groups)} /> 

                {/* profile page */}
                <Route path='/profile' exact component={Profile} />
                <Route path='/profile_student' exact component={withAuth(ProfileStudent)} />        
                <Route path='/grades' exact component={withAuth(Grades)} /> 
                <Route path='/grademe' exact component={withAuth(GradeMe)} /> 

                <Route path='/profile_expertise' exact  component={withAuth(ProfileExpertise)} />
                <Route path='/profile_teachers_list' exact  component={withAuth(ProfileTeachers)} /> 
                <Route path='/profile_program' exact  component={withAuth(ProfileProgram)} /> 
                <Route path='/edit_profile' exact  component={withAuth(EditProfile)} />
                <Route path='/profile_student/:id' exact  component={withAuth(ProfileStudent)} />


                {/* LIST of experts */}
                {/* <Route path='/experts_list' exact component={withAuth(ExpertsList)} />  */}
                <Route path='/git_experts' exact component={withAuth(GitExperts)} />
                <Route path='/html_experts' exact component={withAuth(HtmlExperts)} />
                <Route path='/sass_experts' exact component={withAuth(SassExperts)} />
                <Route path='/django_experts' exact component={withAuth(DjangoExperts)} />
                <Route path='/docker_experts' exact component={withAuth(DockerExperts)} />
                <Route path='/python_experts' exact component={withAuth(PythonExperts)} />
                <Route path='/javascript_experts' exact component={withAuth(JavascriptExperts)} />
                <Route path='/node_experts' exact component={withAuth(NodeExperts)} />
                <Route path='/react_experts' exact component={withAuth(ReactExperts)} />

                {/* LecturesLayout etc. */}
                <Route path='/lectures'  exact  component={withAuth(LecturesList)} />
                <Route path='/lecture_detail/:id' exact  component={withAuth(LectureDetail)} />
                <Route path='/edit_lecture' exact  component={withAuth(EditLecture)} />
                <Route path='/programs'  exact  component={withAuth(ProgramsList)} />
                <Route path='/lectureweeks'  exact  component={withAuth(LectureWeeksList)} />
                <Route path='/lessons'  exact  component={withAuth(LessonsList)} />
                <Route path='/courses' exact component={withAuth(CoursesHomePage)} />

            </Switch>
        </Router>

    );
};

//add test
export default Routes;

