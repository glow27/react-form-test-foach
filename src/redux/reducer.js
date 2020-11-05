import { UPDATE_STATUS } from './actionTypes';

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return {
        ...state,
        employees: state.employees.map((el) => {
          if (el.name !== action.payload) {
            return el;
          }
          return { ...el, onVacation: !el.onVacation };
        }),
      };

    default:
      return state;
  }
}

export default reducer;
