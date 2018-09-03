import { applyMiddleware, createStore } from 'redux';
import invariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../Reducers/RootReducer';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(invariant())
		)
	)
}
