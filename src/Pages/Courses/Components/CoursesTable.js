import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import './CoursesTable.css';

const createCourseRow = () => {
	return function (course, index) {
		return (
			<tr key={index}>
				<td><a href={course.watchHref} target="_blank">Watch</a></td>
				<td><Link to={'/courses/' + course.id}>{course.title}</Link></td>
				<td>{course.authorId}</td>
				<td>{course.category}</td>
				<td>{course.length}</td>
			</tr>
		);
	}
};

const CoursesTable = ({ courses }) => {
	return (
		<Table hover responsive>
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th>Title</th>
					<th>Author</th>
					<th>Category</th>
					<th>Length</th>
				</tr>
			</thead>
			<tbody>
				{courses.map(createCourseRow(), this)}
			</tbody>
		</Table>
	);
};

export default CoursesTable;
