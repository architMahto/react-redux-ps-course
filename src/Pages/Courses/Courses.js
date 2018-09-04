import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CoursesList from './Components/CoursesList';
import ManageCourse from './Components/ManageCourse';

import './Courses.css';

const Courses = ({ match }) => {
	return (
		<Switch>
			<Route path={match.path} exact component={CoursesList} />
			<Route path={`${match.path}/add-course`} component={ManageCourse} />
			<Route path={`${match.path}/:id`} component={ManageCourse} />
		</Switch>
	);
};

export default Courses;
