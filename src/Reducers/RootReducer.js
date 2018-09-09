import { combineReducers } from 'redux';
import {reducer as notificationsReducer} from 'reapop';

import authorsReducer from './AuthorsReducer';
import coursesReducer from './CoursesReducer';

const rootReducer = combineReducers({
	authors: authorsReducer,
	courses: coursesReducer,
	notifications: notificationsReducer(),
});

export default rootReducer;
