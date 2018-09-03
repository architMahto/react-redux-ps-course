import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import './CoursesList.css';

const CoursesList = ({ courses }) => {
	return (
		<ListGroup>
			{courses.map((course, index) => {
				return <ListGroupItem key={index}>{course.title}</ListGroupItem>
			})}
		</ListGroup>
	);
};

export default CoursesList;
