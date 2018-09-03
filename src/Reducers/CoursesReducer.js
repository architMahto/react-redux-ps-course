import { CoursesActions } from '../Actions/CoursesActions';
import { createDefaultCoursesState } from '../State/CoursesState';

export default function coursesReducer(state = createDefaultCoursesState(), action) {
	switch (action.type) {
		case CoursesActions.CREATE_COURSE:
			return {
				...state,
				entities: [...state.entities, action.course]
			};

		default:
			return state;
	}
}
