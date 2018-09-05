import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Grid, Row } from 'react-bootstrap';

import CoursesTable from './CoursesTable';

import './CoursesList.css';

const CoursesList = ({courses, match}) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Col xs={12} sm={10} smOffset={1}>
					<Link to={`${match.url}/add-course`}>
						<Button type={'button'} bsStyle={'primary'}>Add Course</Button>
					</Link>
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={10} smOffset={1}>
					<CoursesTable courses={courses} />
				</Col>
			</Row>
		</Grid>
	);
};

export default CoursesList;
