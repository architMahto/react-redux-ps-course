import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Grid, PageHeader, Row } from 'react-bootstrap';

import CoursesTable from './CoursesTable';

import './CoursesList.css';

class CoursesList extends Component {
	constructor(props) {
		super(props);

		this.courses = props.courses.entities;
		this.match = props.match;
	}

	render() {
		return (
			<div className="Courses-List-Page">
				<PageHeader>Courses</PageHeader>
				<Grid fluid={true}>
					<Row>
						<Col xs={12} sm={10} smOffset={1}>
							<Link to={`${this.match.url}/add-course`}>
								<Button type={'button'} bsStyle={'primary'}>Add Course</Button>
							</Link>
							<CoursesTable courses={this.courses} />
						</Col>
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

export default connect(mapStateToProps)(CoursesList);
