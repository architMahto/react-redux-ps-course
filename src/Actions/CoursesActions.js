import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';

export const createCourse = (course) => {
	return {type: CoursesActionTypes.CREATE_COURSE, course};
};
