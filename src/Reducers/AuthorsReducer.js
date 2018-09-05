import { createDefaultAuthorsState } from '../State/AuthorsState';
import { updateLoadableOnError } from '../Utils/UpdateLoadableOnError';
import { updateLoadableOnStart } from '../Utils/UpdateLoadableOnStart';
import { updateLoadableOnSuccess } from '../Utils/UpdateLoadableOnSuccess';

import * as AuthorsActionTypes from '../ActionTypes/AuthorsActionTypes';

export default function authorsReducer(state = createDefaultAuthorsState(), action) {
	switch (action.type) {
		case AuthorsActionTypes.GET_AUTHORS_STARTED:
			return {
				...state,
				...updateLoadableOnStart()
			};

		case AuthorsActionTypes.GET_AUTHORS_SUCCESS:
			return {
				...state,
				entities: action.authors,
				...updateLoadableOnSuccess()
			};

		default:
			return state;
	}
}
