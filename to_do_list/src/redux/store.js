import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => 
  columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

  // action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRIG', payload});

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

    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload
      };

    default:
      return state;
  }
};

// const initialState = {
//   columns: [],
//   searchString: ''
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;