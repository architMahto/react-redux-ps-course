import React, { Component } from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import CourseForm from './Components/CourseForm';

class Courses extends Component {
	constructor(props) {
		super(props);

		this.state = {
			course: {
				title: ''
			}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
				</Grid>
			</div>
		);
	}
}

export default Courses;
