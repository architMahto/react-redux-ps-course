import React from 'react';
import { Table } from 'react-bootstrap';

import './CoursesTable.css';

const createCourseRow = () => {
	return function (course, index) {
		return (
			<tr key={index}>
				<td>{course.title}</td>
			</tr>
		);
	}
};

const CoursesTable = ({ courses }) => {
	return (
		<Table bordered condensed hover>
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
