import { createDefaultCoursesState } from '../State/CoursesState';

import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';

export default function coursesReducer(state = createDefaultCoursesState(), action) {
	switch (action.type) {
		case CoursesActionTypes.CREATE_COURSE_SUCCESS:
			return {
				...state,
				entities: [...state.entities, action.course]
			};

		case CoursesActionTypes.GET_COURSES_SUCCESS:
			return {
				...state,
				entities: action.courses
			};

		case CoursesActionTypes.UPDATE_COURSE_SUCCESS:
			return {
				...state,
				entities: state.entities.map(course => {
					if (course.id === action.course.id) {
						return action.course;
					}

					return course;
				})
			};

		default:
			return state;
	}
}
