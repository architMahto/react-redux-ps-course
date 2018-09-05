import { createDefaultCoursesState } from '../State/CoursesState';
import { updateLoadableOnError } from '../Utils/UpdateLoadableOnError';
import { updateLoadableOnStart } from '../Utils/UpdateLoadableOnStart';
import { updateLoadableOnSuccess } from '../Utils/UpdateLoadableOnSuccess';

import * as CoursesActionTypes from '../ActionTypes/CoursesActionTypes';

export default function coursesReducer(state = createDefaultCoursesState(), action) {
	switch (action.type) {
		case CoursesActionTypes.CREATE_COURSE_SUCCESS:
			return {
				...state,
				entities: [...state.entities, action.course]
			};

		case CoursesActionTypes.GET_COURSES_STARTED:
			return {
				...state,
				...updateLoadableOnStart()
			};

		case CoursesActionTypes.GET_COURSES_SUCCESS:
			return {
				...state,
				entities: action.courses,
				...updateLoadableOnSuccess()
			};

		case CoursesActionTypes.SAVE_COURSE_STARTED:
			return {
				...state,
				...updateLoadableOnStart()
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
