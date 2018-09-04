import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';
import MockCourseApi from '../Api/MockCourseApi';

export const createCourse = (course) => {
	return {type: CoursesActionTypes.CREATE_COURSE, course};
};

export const getCoursesStarted = () => {
	return {type: CoursesActionTypes.GET_COURSES_STARTED}
};

export const getCoursesSuccess = (courses) => {
	return {type: CoursesActionTypes.GET_COURSES_SUCCESS, courses}
};

export const getCourses = () => {
	return (dispatch) => {
		dispatch(getCoursesStarted());

		return MockCourseApi.getAllCourses()
			.then(courses => {
				dispatch(getCoursesSuccess(courses));
			})
			.catch(error => {
				throw(error);
			});
	}
};
