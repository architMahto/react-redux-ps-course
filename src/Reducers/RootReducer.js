import { combineReducers } from 'redux';
import coursesReducer from './CoursesReducer';

const rootReducer = combineReducers({
	courses: coursesReducer
});

export default rootReducer;
