import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CoursesListContainer from './Containers/CoursesListContainer';
import ManageCourseContainer from './Containers/ManageCourseContainer';

import './Courses.css';

const Courses = ({ match }) => {
	return (
		<Switch>
			<Route path={match.path} exact component={CoursesListContainer} />
			<Route path={`${match.path}/add-course`} component={ManageCourseContainer} />
			<Route path={`${match.path}/:id`} component={ManageCourseContainer} />
		</Switch>
	);
};

export default Courses;
