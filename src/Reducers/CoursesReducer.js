import { createDefaultCoursesState } from '../State/CoursesState';

import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';

export default function coursesReducer(state = createDefaultCoursesState(), action) {
	switch (action.type) {
		case CoursesActionTypes.CREATE_COURSE:
			return {
				...state,
				entities: [...state.entities, action.course]
			};

		case CoursesActionTypes.GET_COURSES_SUCCESS:
			return {
				...state,
				entities: action.courses
			};

		default:
			return state;
	}
}
