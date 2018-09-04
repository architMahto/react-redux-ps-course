import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';
import MockCourseApi from '../Api/MockCourseApi';

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
				throw(error);
			});
	};
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
			})
			.catch(error => {
				throw(error);
			})
	};
};

export const saveCourseStarted = () => {
	return {type: CoursesActionTypes.SAVE_COURSE_STARTED};
};

export const updateCourseSuccess = (course) => {
	return {type: CoursesActionTypes.UPDATE_COURSE_SUCCESS, course};
};
