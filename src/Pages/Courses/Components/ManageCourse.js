import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import * as CoursesActions from '../../../Actions/CoursesActions';

import CourseForm from './CourseForm';

class ManageCourse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			course: {
				title: ''
			}
		}
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
		alert(`Saving ${this.state.course.title}`);
	}

	render() {
		return (
			<div className="Manage-Course-Page">
				<PageHeader>Manage Course</PageHeader>
				<Grid fluid={true}>
					<Row>
						<Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
							<CourseForm course={this.state.course}
													onFieldChange={this.onFieldChange}
													handleSubmit={this.handleSubmit} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return { state };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(CoursesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
