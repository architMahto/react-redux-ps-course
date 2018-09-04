import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import invariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../Reducers/RootReducer';

const middlewares = [thunk, invariant()];

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares))
	)
}
