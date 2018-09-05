import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';
import MockCourseApi from '../Api/MockCourseApi';
import history from '../Utils/History';

export const createCourseSuccess = (course) => {
	return {type: CoursesActionTypes.CREATE_COURSE_SUCCESS, course};
};

export const getCourses = () => {
	return (dispatch) => {
		dispatch(getCoursesStarted());

		return MockCourseApi.getAllCourses()
			.then(courses => {
				dispatch(getCoursesSuccess(courses));
			})
			.catch(error => {
				dispatch(getCoursesError(error));
			});
	};
};

export const getCoursesError = (error) => {
	return {type: CoursesActionTypes.GET_COURSES_ERROR, error}
};

export const getCoursesStarted = () => {
	return {type: CoursesActionTypes.GET_COURSES_STARTED}
};

export const getCoursesSuccess = (courses) => {
	return {type: CoursesActionTypes.GET_COURSES_SUCCESS, courses}
};

export const saveCourse = (course) => {
	return (dispatch) => {
		dispatch(saveCourseStarted());

		return MockCourseApi.saveCourse(course)
			.then(savedCourse => {
				course.id ?
					dispatch(updateCourseSuccess(savedCourse)) :
					dispatch(createCourseSuccess(savedCourse));
				history.push('/courses');
			})
			.catch(error => {
				dispatch(saveCourseError(error));
			})
	};
};

export const saveCourseError = (error) => {
	return {type: CoursesActionTypes.SAVE_COURSE_ERROR, error};
};

export const saveCourseStarted = () => {
	return {type: CoursesActionTypes.SAVE_COURSE_STARTED};
};

export const updateCourseSuccess = (course) => {
	return {type: CoursesActionTypes.UPDATE_COURSE_SUCCESS, course};
};
