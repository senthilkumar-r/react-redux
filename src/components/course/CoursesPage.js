import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Input from '../common/textInput';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        // this.props.dispatch(courseActions.createCourse(this.state.course));
        //if we are not using mapDispatchToProps function explicitly, then we can use the above statement
        //Or
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index} >{course.title}</div>;
    }
    render() {
        debugger;
        return (
            <div>
                <h1>Course</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <Input
                    name="coursename"
                    label="Course Name"
                    value={this.state.course.title}
                    onChange={this.onTitleChange} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    //the above statement is not required, if we use mapDispatchToProps function.there we already use dispatch
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//Or
//mapDispatchToProps is optional, connect will handle it automatically
// export default connect(mapStateToProps)(CoursesPage);
//Or
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);