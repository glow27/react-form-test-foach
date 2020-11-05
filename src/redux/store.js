import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const initialState = {
  employees: [
    {
      name: 'Phil Schiller',
      position: 'Senior Vice President, Worldwide Marketing',
      onVacation: true,
    },
    {
      name: 'Craig Federighi',
      position: 'Senior Vice President, Software Engineering',
      onVacation: false,
    },
    {
      name: 'Eddy Cue',
      position: 'Senior Vice President, Internet Software and Services',
      onVacation: false,
    },
  ],
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
