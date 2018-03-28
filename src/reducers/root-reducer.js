import { combineReducers, } from 'redux';
import { initialConfig, } from './initial-config';

/**
 * @module Reducer
 */
/**
 * Combine Reducers for the Application
 * @summary The reducer for the application is created by using the Combine
 * Reducers which merges all the specified reducers into one
 */
const rootReducers = combineReducers({
  initialConfig,
});

export default rootReducers;
