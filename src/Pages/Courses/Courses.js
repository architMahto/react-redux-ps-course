import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CoursesList from './Components/CoursesList';

const Courses = ({ match }) => {
	return (
		<Switch>
			<Route path={match.path} exact component={CoursesList} />
		</Switch>
	);
};

export default Courses;
