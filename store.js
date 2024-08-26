import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import appointmentsReducer from './reducers/appointmentsReducer';
import patientsReducer from './reducers/patientsReducer';

const rootReducer = combineReducers({
    appointments: appointmentsReducer,
    patients: patientsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
