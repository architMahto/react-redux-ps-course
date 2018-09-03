import { createDefaultCoursesState } from '../State/CoursesState';

import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';

export default function coursesReducer(state = createDefaultCoursesState(), action) {
	switch (action.type) {
		case CoursesActionTypes.CREATE_COURSE:
			return {
				...state,
				entities: [...state.entities, action.course]
			};

		default:
			return state;
	}
}
