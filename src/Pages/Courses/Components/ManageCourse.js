import React, { Component } from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

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
				<Grid>
					<Row>
						<Col xs={12} sm={3}>
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

export default ManageCourse;
