import { combineReducers } from 'redux';
import funds from './fundsReducer';
import configuration from './configurationReducer';
import history from './historyReducer';

export default combineReducers({ funds, configuration, history });
