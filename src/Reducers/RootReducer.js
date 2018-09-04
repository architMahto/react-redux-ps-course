import { combineReducers } from 'redux';

import authorsReducer from './AuthorsReducer';
import coursesReducer from './CoursesReducer';

const rootReducer = combineReducers({
	authors: authorsReducer,
	courses: coursesReducer
});

export default rootReducer;
