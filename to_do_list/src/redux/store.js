import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

//[payload zamiast newColumn]
const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { 
        ...state, 
        columns: [...state.columns, { 
        ...action.payload, 
        id: shortid()
      }]
    };

    case 'ADD_CARD':
      return{
        ...state,
        columns: state.columns.map(column => {
          if(column.id === action.payload.columnId){
            return {
              ...column,
              cards: [...column.cards, { id: shortid(), title: action.payload.title}]
            };
          }
          return column;
        })
      };


    default:
      return state;
  }
};

// const initialState = {
//   columns: []
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;