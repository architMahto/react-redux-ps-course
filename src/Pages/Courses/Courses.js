import React, { Component } from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import CourseForm from './Components/CourseForm';

import * as coursesActions from '../../Actions/CoursesActions';

class Courses extends Component {
	constructor(props) {
		super(props);

		console.log('this.props:', this.props);

		this.state = {
			course: {
				title: ''
			}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	onFieldChange(event) {
		this.setState({
			course: {
				...this.state.course,
				[event.target.name]: event.target.value
			}
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		// alert(`Saving ${this.state.course.title}`);
		this.props.dispatch(coursesActions.createCourse(this.state.course));
	}

	render() {
		return (
			<div className="Courses-Page">
				<PageHeader>Courses</PageHeader>
				<Grid>
					<Row>
						<Col xs={12} sm={3}>
							<CourseForm course={this.state.course}
													onFieldChange={this.onFieldChange}
													handleSubmit={this.handleSubmit}>
							</CourseForm>
						</Col>
					</Row>
					<Row>
						<h1>Courses List</h1>
						{this.props.courses.entities.map(this.courseRow)}
					</Row>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

export default connect(mapStateToProps)(Courses);
