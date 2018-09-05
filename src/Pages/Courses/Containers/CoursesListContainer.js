import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PageHeader } from 'react-bootstrap';

import * as CoursesActions from '../../../Actions/CoursesActions';

import CoursesList from '../Components/CoursesList';

import './CoursesListContainer.css';

class CoursesListContainer extends Component {
	constructor(props) {
		super(props);

		this.actions = props.actions;
		this.match = props.match;
	}

	componentDidMount() {
		this.actions.getCourses();
	}

	render() {
		return (
			<div className="Courses-List-Page">
				<PageHeader>Courses</PageHeader>
				<CoursesList courses={this.props.courses.entities} match={this.match}/>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(CoursesActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListContainer);
