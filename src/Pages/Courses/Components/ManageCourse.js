import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import CourseForm from './CourseForm';

const ManageCourse = ({ course, authors, loading, errors, onFieldChange, onSubmit }) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
					<CourseForm course={course}
											authors={authors}
											loading={loading}
											errors={errors}
											onFieldChange={onFieldChange}
											onSubmit={onSubmit} />
				</Col>
			</Row>
		</Grid>
	);
};

export default ManageCourse;
