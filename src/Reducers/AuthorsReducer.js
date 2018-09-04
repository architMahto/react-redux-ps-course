import { createDefaultAuthorsState } from '../State/AuthorsState';

import * as AuthorsActionTypes from '../ActionTypes/AuthorsActionTypes';

export default function authorsReducer(state = createDefaultAuthorsState(), action) {
	switch (action.type) {
		case AuthorsActionTypes.GET_AUTHORS_SUCCESS:
			return {
				...state,
				entities: action.authors
			};

		default:
			return state;
	}
}
